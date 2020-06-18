let Hei = $(".height").height() - window.innerHeight;
$(".container").scroll(function(){
    let progressH = ($(".height").offset().top / Hei) * -100;
    $(".parallax img").css({
        "object-position" : "center " + progressH + "%"
    })
});