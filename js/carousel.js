setup = function(){
	$(".menu-expand").click(function() {$("nav").slideToggle("slow");})
	alert("ffff");
	$(".filter").click(function() {
		$(".side-menu-top").slideToggle("slow");
		$(".side-menu-bottom").slideToggle("slow");
	})
}
$(document).ready(setup);