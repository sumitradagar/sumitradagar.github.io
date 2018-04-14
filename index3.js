$(document).ready(()=>{
	$(".simpleModal").hide();
	$(".toClose").click(function(){
		$(".simpleModal").hide();
	})
	$(".button1").click(function(){
		$(".simpleModal").slideToggle().siblings("visible").slideUp();
	})
	$("header").addClass("heading")
$("p").addClass("paragraph")
$(".closeBtn").click(function(){
	$(".simpleModal").hide();
})

})