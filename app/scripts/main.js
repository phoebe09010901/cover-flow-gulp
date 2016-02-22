jQuery(document).ready(function($) {

	var nowIndex= 0;

	var n = $(".cover").length;
	var coverWidth = ($(".cover-flow").width()-700) / (n-1);

	/**
	 * 獨立出一個 show Cover 的方法
	 * 它有可能會在:
	 * 1. 網頁一開始時
	 * 2. 滑鼠移過卡片時
	 * 會觸發
	 */
	var showCover = function (hoverIndex) {
		$(".cover").each(function(i, c){
			$(c).css({
				left: (274 / (n-1) * i) + "px"
			});
		});
		for (var i = hoverIndex + 1; i < n; i++) {
			$(".cover:eq("+i+")").css({
				left: (700 + coverWidth  * (i - 1)) +"px"
			});
		}
		nowIndex = hoverIndex;
	}

	/**
	 * 滑動移過某個卡片就要觸發
	 */
	$(".cover").on("mouseover", function(){
		showCover($(".cover").index(this));
	});

	/**
	 * 網頁自動觸發
	 */
	showCover(nowIndex);

	/**
	 * 按 left 時要把 nowIndex - 1, 但以 0 為限
	 */
	$(".left-btn").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		nowIndex = nowIndex>0?nowIndex-1:0;
	});

	/**
	 * 按 right 時要把 nowIndex + 1, 但以 n-1 為限
	 */
	$(".right-btn").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		nowIndex = nowIndex<n-1?nowIndex+1:n-1;
	});

	/**
	 * 點擊 left 或是 right 按鈕時
	 * 就要觸發某個卡片的 mouse cover 事件
	 */
	$("button").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		 $(".cover:eq("+nowIndex+")").trigger('mouseover');
	});	

});