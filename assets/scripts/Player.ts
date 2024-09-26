const { ccclass, property } = cc._decorator;
import Maze from "./Maze";
import {
	BRICK_WIDTH,
	BRICK_HEIGHT,
	MAZE_MOVE_STEP,
} from "./helper/GameConstant";
const enum MAZE_DIRECTION {
	UP,
	DOWN,
	LEFT,
	RIGHT,
	STILL,
}

@ccclass
export default class Player extends cc.Component {
	@property
	private stepDuration = 0; // 走一步需要用多少时间

	private _isMoving = false;

	private _isPressing = false;

	private _game: Maze = undefined;

	public onLoad(): void {
		this._setInputListener();
	}

	public init(game: Maze): void {
		this._game = game;
	}

	onCollisionEnter(other: cc.Collider, self: cc.Collider): void {
		console.log(
			"THERE IS A COLLISION : (" +
				other.node.x +
				", " +
				other.node.y +
				") ,  (" +
				self.node.x +
				", " +
				self.node.y +
				")"
		);
		setTimeout(() => {
			this._game.levelUp();
			console.log("LEVEL UP ALREADY");
		}, this.stepDuration * 1000); // 必须等接触星星的那次tween执行完了再levelup,否则下一关的position会被overwrite
	}

	protected onDestroy(): void {
		this._closeInputListener();
	}

	private _canMove(delX: number, delY: number): boolean {
		return !this._game.isWall(
			this.node.x / BRICK_WIDTH + delX,
			this.node.y / -BRICK_HEIGHT + delY
		);
	}

	private _setInputListener(): void {
		cc.systemEvent.on(
			cc.SystemEvent.EventType.KEY_DOWN,
			this._onKeyDown,
			this
		);
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
	}

	private _closeInputListener(): void {
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN);
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP);
	}

	private _onKeyDown(event): void {
		if (this._isPressing || this._isMoving || !this._game.playerCanMove()) {
			return;
		}
		switch (event.keyCode) {
			case cc.macro.KEY.left:
				this._isPressing = true;
				this._moveLeft();
				break;
			case cc.macro.KEY.right:
				this._isPressing = true;
				this._moveRight();
				break;
			case cc.macro.KEY.up:
				this._isPressing = true;
				this._moveUp();
				break;
			case cc.macro.KEY.down:
				this._isPressing = true;
				this._moveDown();
				break;
			default:
				break;
		}
	}

	private _moveLeft(): void {
		if (this._canMove(-1, 0)) {
			this._startMoving(MAZE_DIRECTION.LEFT);
		}
	}

	private _moveRight(): void {
		if (this._canMove(1, 0)) {
			this._startMoving(MAZE_DIRECTION.RIGHT);
		}
	}

	private _moveUp(): void {
		if (this._canMove(0, -1)) {
			this._startMoving(MAZE_DIRECTION.UP);
		}
	}

	private _moveDown(): void {
		if (this._canMove(0, 1)) {
			this._startMoving(MAZE_DIRECTION.DOWN);
		}
	}

	private _onKeyUp(event): void {
		switch (event.keyCode) {
			case cc.macro.KEY.left:
				this._isPressing = false;
				break;
			case cc.macro.KEY.right:
				this._isPressing = false;
				break;
			case cc.macro.KEY.up:
				this._isPressing = false;
				break;
			case cc.macro.KEY.down:
				this._isPressing = false;
				break;
			default:
				break;
		}
	}

	private _startMoving(dir: MAZE_DIRECTION): void {
		this._isMoving = true;
		const tween = this._getMovement(dir)?.call(() => {
			this._isMoving = false;
		});
		cc.tween(this.node).then(tween).start();
	}

	private _getMovement(dir: MAZE_DIRECTION): cc.Tween {
		switch (dir) {
			case MAZE_DIRECTION.DOWN:
				return cc
					.tween(this.node)
					.by(
						this.stepDuration,
						{ y: -MAZE_MOVE_STEP },
						{ easing: "sineOut" }
					);
			case MAZE_DIRECTION.UP:
				return cc
					.tween(this.node)
					.by(
						this.stepDuration,
						{ y: MAZE_MOVE_STEP },
						{ easing: "sineOut" }
					);
			case MAZE_DIRECTION.LEFT:
				return cc
					.tween(this.node)
					.by(
						this.stepDuration,
						{ x: -MAZE_MOVE_STEP },
						{ easing: "sineOut" }
					);
			case MAZE_DIRECTION.RIGHT:
				return cc
					.tween(this.node)
					.by(
						this.stepDuration,
						{ x: MAZE_MOVE_STEP },
						{ easing: "sineOut" }
					);
			default:
				return undefined;
		}
	}
}
