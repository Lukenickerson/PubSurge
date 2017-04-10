$(document).ready(function(){

	var $pages = $("body > article");
	var $nav = $("body > nav");

	$pages.hide().filter(".home").fadeIn();


	$("a").click(function(e){
		var $link = $(this);
		var location = $link.attr("href").substr(1);
		var $newPage = $pages.filter("." + location);
		$pages.hide();
		if ($newPage.length === 0) {
			$newPage = $pages.filter(".home");
			location = "home";
		}
		if (location === "home") {
			$nav.hide();
		} else {
			$nav.show();
		}
		$newPage.fadeIn();
	});

});