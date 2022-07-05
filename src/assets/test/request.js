import axios from "axios";
function requestCallback(fn) {
	axios
		.get("http://localhost:8080/test.json")
		.then((res) => {
			fn(res);
		})
		.catch((res) => {
			fn(res);
		});
}

function requestPromise() {
	return axios.get("http://localhost:8080/test.json");
}

export { requestCallback, requestPromise };
