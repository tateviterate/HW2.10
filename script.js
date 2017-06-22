$(document).ready(function() {
	$(".nav li").click(function () {
		if(!$(this).hasClass("active")) {
			var i = $(this).index();
			$(".nav li.active").removeClass("active");
			$("#tabs .active").hide().removeClass("active");
			$(this).addClass("active");
			$($("#tabs").children(".tabcontent")[i]).fadeIn(500).addClass("active");
		}
	});
});