$(window).on("load", function(loaded) {

	// function event1() {
	// 	$(".screen").click(function() {
	// 		$(".sidebar").animate({width:"0px"},300);
	// 	});
	// };

	$("#navbutton").click(function(e) {
		if ($("#screen-1").css("left") !== '0px') {
			$("#screen-1").animate({left:"0px"},300);
		} else {
			$("#screen-1").animate({left:"+=200px"},300);
		}
	});

	$("#screen-1").click(function() {
		if ($("#screen-1").css("left") !== '0px') {
			$("#screen-1").animate({left:"0px"},300);
		}
	});


});


