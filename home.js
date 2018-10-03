$(document).ready(function(){
	$.ajax({
		url: "https://talaikis.com/api/quotes/random/",
		type: "GET",
		dataType: "json",
		cache: false,
		success: function(data){
			$("#quote").html("<h2>" + data["quote"] + "</h2><br><h4>- " + data["author"] + "</h4>");
			//console.log(data);
			$.ajax({
				url: "https://api.unsplash.com/photos/random",
				type: "GET",
				data: {"w":"1920", "h": "1080", "query" : data["cat"], "client_id" : "d58bc498f8398f3289a75b928f8e48d862b83e417a4139a5fec533cda1e14567", "count" : "1"},
				dataType: "json",
				cache: false,
				success: function(data1){
					//console.log(data[0]["urls"]["regular"]);
					var arg = "url('" + data1[0]["urls"]["regular"] + "')";
					//console.log(arg);
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
			
	//alert("It works!");
});