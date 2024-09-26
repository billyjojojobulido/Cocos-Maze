/* eslint-disable class-methods-use-this */
const { ccclass, property } = cc._decorator;
import {
	BRICK_HEIGHT,
	BRICK_WIDTH,
	MAZE_M,
	MAZE_N,
	TILE_TYPE,
} from "./helper/GameConstant";
import MazeBuilder from "./helper/MazeBuilder";

import MazePlayer from "./Player";

@ccclass
export default class Maze extends cc.Component {
	@property(cc.Prefab)
	private brick: cc.Prefab = undefined;

	@property(cc.Sprite)
	private player: cc.Sprite = undefined;

	@property(cc.Collider)
	private star: cc.Collider = undefined;

	@property(cc.Label)
	private timeDisplay: cc.Label = undefined;

	@property(cc.ProgressBar)
	private progressBar: cc.ProgressBar = undefined;

	@property(cc.Label)
	private levelLabel: cc.Label = undefined;

	@property(cc.Label)
	private gameOverLabel: cc.Label = undefined;

	@property(cc.Button)
	private startBtn: cc.Button = undefined;

	@property(cc.Button)
	private pauseBtn: cc.Button = undefined;

	@property
	private maxMoveTime = 0;

	private _startX = 0;
	private _startY = 0;
	private _mazeArray: number[][] = undefined;
	private _timer = 0;
	private _isPaused = true;
	private _level = 0;
	private _builder: MazeBuilder = undefined;
	private _brickPool: cc.NodePool = undefined;

	public onLoad(): void {
		// 开启物理系统
		cc.director.getCollisionManager().enabled = true;
		// 初始化砖块对象池
		this._brickPool = new cc.NodePool();
		// cc.director.getCollisionManager().enabledDebugDraw = true;
		// 生成迷宫数组
		this._builder = new MazeBuilder();
		this._mazeArray = this._builder.buildMaze();
		this._displayMaze();

		this._startX = BRICK_WIDTH;
		this._startY = -BRICK_HEIGHT;

		// 游戏倒计时
		this._timer = 0;
		this.timeDisplay.string = "Time: " + this.maxMoveTime + "s";
		this.progressBar.progress = 1;
		// 玩家角色放到固定位置并初始化
		this._initPlayer();
	}

	private _initPlayer(): void {
		// 玩家角色放到固定位置并初始化
		this.player.node.setPosition(cc.v2(this._startX, this._startY));
		this.player.getComponent(MazePlayer).init(this);
	}

	private _resetLevel(): void {
		this._level = 0;
		this.levelLabel.string = "Level: " + this._level;
	}

	public startPlaying(): void {
		if (this.gameOverLabel.node.active) {
			// 如果是失败重开, 则重制人物,通关数,时间,迷宫
			this.gameOverLabel.node.active = false;
			// 通关
			this._resetLevel();
			// 迷宫
			this._rebuildMaze();
			this._displayMaze();
		}
		// 重制人物
		this.player.node.setPosition(cc.v2(this._startX, this._startY));
		// 游戏倒计时
		this._timer = 0;
		this.timeDisplay.string = "Time: " + this.maxMoveTime + "s";
		this.progressBar.progress = 1;
		this.startBtn.node.active = false;
		this._isPaused = false;
		this.pauseBtn.node.active = true;
	}

	public onPauseClick(): void {
		if (this._isPaused) {
			this._resumeGame();
		} else {
			this._pauseGame();
		}
	}

	private _pauseGame(): void {
		this._isPaused = true;
		this._changeBtnName("Resume");
	}

	private _changeBtnName(name: string): void {
		const bg = this.pauseBtn.node.getChildByName("Background");
		const labelNode = bg.getChildByName("Label");
		const labComponent = labelNode.getComponent(cc.Label);
		labComponent.string = name;
	}

	private _resumeGame(): void {
		this._isPaused = false;
		this._changeBtnName("Pause");
	}

	private _displayMaze(): void {
		for (let i = 0; i < MAZE_M; i++) {
			for (let j = 0; j < MAZE_N; j++) {
				switch (this._mazeArray[i][j]) {
					case TILE_TYPE.TILE_WALL:
						this._forgeBrick(j * BRICK_WIDTH, -i * BRICK_HEIGHT);
						break;
					case TILE_TYPE.TILE_STAR:
						this.star.node.setPosition(
							j * BRICK_WIDTH,
							-i * BRICK_HEIGHT
						);
						break;
					default:
						break;
				}
			}
		}
	}

	private _forgeBrick(x: number, y: number): void {
		let newBrick: cc.Node = undefined;
		if (this._brickPool.size() > 0) {
			newBrick = this._brickPool.get();
		} else {
			newBrick = cc.instantiate(this.brick);
			newBrick.width = BRICK_WIDTH;
			newBrick.height = BRICK_HEIGHT;
		}
		this.node.addChild(newBrick);
		newBrick.x = x;
		newBrick.y = y;
	}

	private _reuseBrick(brick: cc.Node): void {
		this._brickPool.put(brick);
	}

	private _recycleAllBricks(): void {
		const children = this.node.children;
		for (let i = children.length - 1; i >= 0; i--) {
			if (children[i].name === "Brick") {
				this._reuseBrick(children[i]);
			}
		}
	}

	public playerCanMove(): boolean {
		return !this._isPaused;
	}

	public isWall(x: number, y: number): boolean {
		return this._mazeArray[y][x] === TILE_TYPE.TILE_WALL;
	}

	private _rebuildMaze(): void {
		this._recycleAllBricks();
		this._builder.rebuildMaze(this._mazeArray);
	}

	public levelUp(): void {
		this._timer = 0;
		this._level += 1;
		this.levelLabel.string = "Level: " + this._level;
		this._rebuildMaze();
		this._displayMaze();
		this.player.node.setPosition(cc.v2(this._startX, this._startY));
	}

	private _gameOver(): void {
		this._isPaused = true;
		this.gameOverLabel.node.active = true;
		this.startBtn.node.active = true;
	}

	public update(dt: number): void {
		if (this._isPaused) {
			return;
		}

		this._timer += dt;
		if (this._timer >= this.maxMoveTime) {
			this._gameOver();
			return;
		}
		this.timeDisplay.string =
			"Time: " + Math.floor(this.maxMoveTime - this._timer) + "s";
		this.progressBar.progress =
			Math.floor(this.maxMoveTime - this._timer) / this.maxMoveTime;
	}
}
