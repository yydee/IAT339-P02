setup = function(){
	$(".menu-expand").click(function() {$("nav").slideToggle("slow");})
	$(".filter").click(function() {
		$(".side-menu-top").slideToggle("slow");
		$(".side-menu-bottom").slideToggle("slow");
	})
}
$(document).ready(setup);