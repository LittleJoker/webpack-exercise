class A {
	constructor() {}

	init() {
		alert('aaaa');
	}
}

const a = new A();
const init = a.init;

export {init};