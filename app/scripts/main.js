jQuery(document).ready(function($) {

	var nowIndex= 0;

	var n = $(".cover").length;
	var coverWidth = ($(".cover-flow").width()-700) / (n-1);
	$(".cover").on("mouseover", function(){
		$(".cover").each(function(i, c){
			$(c).css({
				left: (274 / (n-1) * i) + "px"
			});
		});

		var hoverIndex  = $(".cover").index(this);
		for (var i = hoverIndex + 1; i < n; i++) {
			$(".cover:eq("+i+")").css({
				left: (700 + coverWidth  * (i - 1)) +"px"
			});
		}
	});

	$(".cover").each(function(i, c){
		$(c).css({
			left: (274 / (n-1) * i) + "px"
		});
	});

	var hoverIndex = nowIndex;
	for (var i = hoverIndex + 1; i < n; i++) {
		$(".cover:eq("+i+")").css({
			left: (700 + coverWidth  * (i - 1)) +"px"
		});
	}

	$(".left-btn").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		nowIndex = nowIndex>0?nowIndex-1:0;
	});


	$(".right-btn").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		nowIndex = nowIndex<n-1?nowIndex+1:n-1;
	});



	$("button").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		 $(".cover:eq("+nowIndex+")").trigger('mouseover');
	});	

});