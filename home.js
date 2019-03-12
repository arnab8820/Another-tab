$(document).ready(function(){
	$.ajax({
		url: "http://quotes.rest/qod.json?category=life",
		type: "GET",
		dataType: "json",
		cache: false,
		success: function(data){
			$("#quote").html("<h2>" + data["contents"]["quotes"][0]["quote"] + "</h2><br><h4>- " + data["contents"]["quotes"][0]["author"] + "</h4>");

			//set background according to quote category
			$.ajax({
				url: "https://api.unsplash.com/photos/random",
				type: "GET",
				data: {"w":"1920", "h": "1080", "query" : data["contents"]["quotes"][0]["category"], "client_id" : "d58bc498f8398f3289a75b928f8e48d862b83e417a4139a5fec533cda1e14567", "count" : "1"},
				dataType: "json",
				cache: false,
				success: function(data1){
					var arg = "url('" + data1[0]["urls"]["regular"] + "')";
					$(".bg").css("background-image", arg);
				},
				error: function(){
					console.log("error");
				}
			});
		},
		error: function(){
			console.log("error");
		}
	});
});