$ (document).ready(function(){

 	$("#image").hide();

	$("#button").click (function(){
 		$("#image").show();


	});

	$("#image").click (function(){
 		$(this).hide();
 	});


});