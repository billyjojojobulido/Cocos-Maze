import { MAZE_M, MAZE_N, TILE_TYPE } from "./GameConstant";
import Point from "./Point";
import Queue from "./Queue";

const actions = [
	[0, 1], // 向右
	[0, -1], // 向左
	[1, 0], // 向下
	[-1, 0], // 向上
];

function _initMaze(): number[][] {
	const maze: number[][] = new Array(MAZE_M);
	for (let i = 0; i < MAZE_M; i++) {
		maze[i] = new Array(MAZE_N).fill(TILE_TYPE.TILE_WALL);
	}
	return maze;
}

function _inBorder(x: number, y: number): boolean {
	return x > 0 && x < MAZE_M && y > 0 && y < MAZE_N;
}

export default class MazeBuilder {
	private _visited: boolean[][] = undefined;

	public constructor() {
		this._visited = new Array(MAZE_M);
		for (let i = 0; i < MAZE_M; i++) {
			this._visited[i] = new Array(MAZE_N).fill(false);
		}
	}

	// 清空给定maze数组和对应的visited辅助数组
	private _clearMaze(maze: number[][]): void {
		for (let i = 0; i < MAZE_M; i++) {
			for (let j = 0; j < MAZE_N; j++) {
				maze[i][j] = TILE_TYPE.TILE_WALL;
				this._visited[i][j] = false;
			}
		}
	}

	public buildMaze(): number[][] {
		const maze = _initMaze();

		// 构建可以通行的道路
		this._generalizePath(maze, false);

		return maze;
	}

	// eslint-disable-next-line complexity
	private _generalizePath(maze: number[][], rebuild: boolean): void {
		const queue = new Queue<Point>();
		if (rebuild) {
			// 如果已经构建过maze, 重新生成迷宫之前需要把之前的数组clear掉
			this._clearMaze(maze);
		}
		// 出生点入队
		queue.enqueue({ x: 1, y: 1 });
		maze[1][1] = TILE_TYPE.TILE_ROAD;
		this._visited[1][1] = true;
		let farthest: Point = undefined;

		while (!queue.isEmpty()) {
			const ptr = queue.randomDequeue();
			// let ptr = queue.dequeue();
			farthest = ptr;
			for (let i = 0; i < actions.length; i++) {
				const newX = ptr.x + actions[i][0] * 2;
				const newY = ptr.y + actions[i][1] * 2;

				if (_inBorder(newX, newY) && !this._visited[newX][newY]) {
					queue.enqueue({ x: newX, y: newY });
					this._visited[newX][newY] = true;
					if (newX < MAZE_M - 1 && newY <= MAZE_N - 1) {
						maze[newX][newY] = TILE_TYPE.TILE_ROAD;
					} else {
						console.log(ptr.x, ptr.y, actions[i]);
					}

					const oneStep: Point = {
						x: ptr.x + actions[i][0],
						y: ptr.y + actions[i][1],
					};
					if (_inBorder(oneStep.x, oneStep.y)) {
						this._visited[oneStep.x][oneStep.y] = true;
						maze[oneStep.x][oneStep.y] = TILE_TYPE.TILE_ROAD;
					}
				}
			}
		}
		maze[farthest.x][farthest.y] = TILE_TYPE.TILE_STAR;
	}

	public rebuildMaze(maze: number[][]): void {
		this._generalizePath(maze, true);
	}
}
