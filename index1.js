$(document).ready(()=>{
	let accordion = $(".accordion");
accordion.find("dd").hide().addClass("big-font");

accordion.find("dt").on("click",function(){
	$(this).next("dd").slideToggle().
	siblings("dd:visible").slideUp();
})
$("div").addClass("container").css("border","2px solid black")
})
