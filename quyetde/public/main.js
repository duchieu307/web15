// axios.get("http://localhost:3000/randomquestion")
// .then(function (response) {
//     if(response.data) {
// 		document.getElementById("questionContent").innerText = response.data.questionContent;
// 	}
// })
// .catch(function (error) {
// 	console.log(error);
// });

$.ajax({
	url: "http://localhost:3000/randomquestion",
	type: "GET",
	success: function(response) {
		if(response) {
			$("#questionContent").text(response.questionContent);
		}
	},
	error: function(err) {
		console.log(err);
	}
});