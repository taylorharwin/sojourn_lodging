$(document).ready(function(){
	
	var $buttons = $('.btn');
	var $categories = $('.properties');

	for (var i = 0; i < $categories.length; i++){
		var thisCat = $categories[i].id
		$($buttons[i]).bind('tap', {msg: thisCat}, function(e){
			$('html, body').animate({
                        scrollTop: $('#' + e.data.msg).offset().top
                    }, 150);
		})
	};
});
