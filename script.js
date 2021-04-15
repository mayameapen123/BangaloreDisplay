$(document).ready( function() {

$(".stroke").on("click",function(){
$(".img1").attr("src", "ka_Strokeangle.gif");
$(".katext > h1").text("Stroke Angle");
$(".katextp > p").text("02");
$(".katext > p").text("The Stroke angle is 90 degrees to reflect the instrument that it was made it which was a flat edge ice cream stick");
});

$(".overhang").on("click",function(){
$(".img1").attr("src", "ka_overhang.gif");
$(".katext > h1").text("Overhang");
$(".katextp > p").text("01");
$(".katext > p").text("The overhang or overshoot is 15px for optical compensation. This makes the letter appear to be the same size as the remaining letters of the typeface");


});

$(".terminal").on("click",function(){
$(".img1").attr("src", "Ka_terminal.gif");
$(".katext > h1").text("Terminal");
$(".katextp > p").text("03");
$(".katext > p").text("The terminal swashes upwards. It cut at the tip instead of being perfectly rounded to appear optical pleasing at a distance");
});

$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});



$(".overlap").on("click",function(){
$(".img2").attr("src", "overlapping.gif");

});

$(".laterminals").on("click",function(){
$(".img2").attr("src", "laterminal.gif");
});

$(".matra").on("click",function(){
$(".img2").attr("src", "matra.gif");
});

$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});


$(".overlap2").on("click",function(){
$(".img3").attr("src", "gaintersections.gif");
$(".satext > h1").text("Overlap");
$(".satextp > p").text("01");
$(".satext > p").text("The letter was created by overlapping two shapes. This technique helped modify and perfect the final form");
});

$(".proportion").on("click",function(){
$(".img3").attr("src", "gasymmetry.gif");
$(".satext > h1").text("Symmetry");
$(".satextp > p").text("02");
$(".satext > p").text("The axis of symmetry is drawn in the center. This makes the shape perfectly symmetrical or equal on both sides");

});

$(".scale").on("click",function(){
$(".img3").attr("src", "gacontrast.gif");
$(".satext > h1").text("Contrast");
$(".satextp > p").text("03");
$(".satext > p").text("The letters have a low to medium contrast which create an informal,  and playful feeling. It makes the tyepface appropriate for large scale designs");
});

$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});






});
