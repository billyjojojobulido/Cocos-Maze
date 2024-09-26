export default class Queue<T> {
	public _nodes: T[] = [];

	public enqueue(item: T): void {
		this._nodes.push(item);
	}

	public dequeue(): T | undefined {
		return this._nodes.shift();
	}

	public front(): T | undefined {
		return this._nodes[0];
	}

	public isEmpty(): boolean {
		return this._nodes.length === 0;
	}

	public size(): number {
		return this._nodes.length;
	}

	public randomDequeue(): T | undefined {
		if (this._nodes.length === 0) {
			return undefined;
		}
		let randomIndex = Math.floor(Math.random() * this._nodes.length);
		let randElement = this._nodes[randomIndex];
		this._nodes[randomIndex] = this._nodes[0];
		this._nodes.shift();
		return randElement;
	}
}
