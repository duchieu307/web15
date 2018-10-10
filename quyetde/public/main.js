// const maxLength = 200;
// const questionContentElem = document.getElementById('questionContent');
// const remainCharElem = document.getElementById('remain');

// questionContentElem.addEventListener(
// 	'input',
// 	function() {
// 		var remainChar = maxLength - questionContentElem.value.length;
// 		remainCharElem.innerText = remainChar;
// 	}
// );

axios.get("http://localhost:3000/randomquestion")
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
	console.log(error);
});