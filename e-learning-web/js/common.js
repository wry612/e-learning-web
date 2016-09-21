/*
*列表tab切换
*/
$('.list-tab').on('click','.tab-item',function(){
	$('.list-tab .tab-item').removeClass('active');
	$(this).addClass('active');
});

/*
*搜索框
*/
$('.top .glyphicon-search').on('click',function(){
	window.location.href = "search.html";
});
$('.top input.form-control').on('focus',function(){
	if ($('.drop-menu li').length > 0) {
		$('.drop-menu').show();
	}
});
$('.top input.form-control').on('blur',function(){
	$('.top .drop-menu').fadeOut();
});
$('.top .drop-menu').on('click','li',function(){
	$('.top input.form-control').val($(this).html());
});

//ie placeholder
if (!('placeholder' in document.createElement('input'))) {
	$('input[placeholder],textarea[placeholder]').each(function() {
		var that = $(this), text = that.attr('placeholder');
		if (that.val() === "") {
			that.val(text).addClass('placeholder');
		}
		that.focus(function() {
			if (that.val() === text) {
				that.val("").removeClass('placeholder');
			}
		}).blur(function() {
			if (that.val() === "") {
				that.val(text).addClass('placeholder');
			}
		}).closest('form').submit(function() {
			if (that.val() === text) {
				that.val('');
			}
		});
	});
}