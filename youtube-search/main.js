$(document).ready(function() {
	$('#search').on('submit', function(event) {
		event.preventDefault();

		const keyword = $("#keyword").val();
		
		$.ajax({
			url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
			type: "GET",
			success: function(data) {
				const items = data.items;
				// let listElem = "";
				// for(let i = 0; i < items.length; i++) {
				// 	let item = items[i];
				// 	console.log(item);
				// 	listElem = listElem + `<div><h2>${item.snippet.title}</h2></div>`
				// }
				// .forEach chay 1 vong
				// .map tra lai 1 array moip
				let listElem = items.map(item => `<div><h2>${item.snippet.title}</h2></div>`);
				$("#result-list").append(listElem);
			}
		});
	});
});