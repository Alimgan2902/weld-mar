
//изменение меню и добавляем паддинг для мобильеной версии
$(document).ready(function(){
	if (window.screen.width < '767') {
		$('.collapse ul').removeClass('navbar-big');
	} else {
		$('.collapse ul').addClass('navbar-big');
	}
});

function  removNavBig(){
	$(window).resize(
		function() {
			if (window.screen.width < '767') {
				$('.collapse ul').removeClass('navbar-big');
			} else {
				$('.collapse ul').addClass('navbar-big');
			}
		}
	);
};

removNavBig();