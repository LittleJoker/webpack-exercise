import(
	/* webpackChunkName: "chunkB" */
	'./b.js'
	).then(B => {
	const b = new B();
	b.init();
});