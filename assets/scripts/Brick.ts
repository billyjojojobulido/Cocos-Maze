const { ccclass } = cc._decorator;

@ccclass
export default class Brick extends cc.Component {
	public unuse(): void {
		this.node.active = false;
	}

	public reuse(): void {
		this.node.active = true;
	}
}
