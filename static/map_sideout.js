$(document).ready(toggle());

function toggle(){
	var hide = true;
    $('.toggle-bouton').on('click',function (event){
    	if (hide) {
    		$('#menu').addClass("menu-slide-show");
    		hide = false;
    	}else {
    		$('#menu').removeClass("menu-slide-show");
    		hide = true;
    	}
	});
}
