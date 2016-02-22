jQuery(document).ready(function($) {
	var n = 12;
	$(".cover").on("mouseover", function(){
		$(".cover").removeClass("right");

		var N  = $(".cover").index(this);
		$(".cover:nth-child(n+" + (N+2) + ")").addClass("right");
	})
});