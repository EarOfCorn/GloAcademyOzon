const getData = () => {
	return fetch("https://testproject-b7f8d-default-rtdb.firebaseio.com/goods.json").then((responce) => {
		return responce.json();
	});
};

export default getData;
