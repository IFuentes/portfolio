var $Menu     = $('#MainMenu'),
	$iconMenu = $('#iconMenu'),
	$divFix   = $('#fixMenu');


//FUNCIONES

function ShowMenu(){
	$Menu.slideToggle();
	if ($divFix.hasClass('Menu-after')) {
		$divFix.removeClass('Menu-after')
		}
	else
		$divFix.addClass('Menu-after')	
}

// Escuchar los eventos
$iconMenu.click(ShowMenu)