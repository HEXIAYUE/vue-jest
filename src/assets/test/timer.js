function timer(fn) {
	setTimeout(() => {
		console.log("timeout1");
		fn();
		console.log("timeout2");
	}, 2000);
}
export { timer };
