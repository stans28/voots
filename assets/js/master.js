var $page = $('.page');

$(".menu_toggle").on('click', function () {
    $page.toggleClass("real");
});

$(".content").on('click', function () {
    $page.removeClass("real");
});

$(document).ready(function(){
    let progress = $('#progressBar');
    let totalH = $(".height").height() - window.innerHeight;
    var menutoggle = () => {
        $(".menu_toggle").css("opacity", "0.1");
    };

    $(".container").scroll(function(){
        let progressH = ($(".height").offset().top / totalH) * -100;
        progress.css({
            height : progressH + "%"
        })

        $(".menu_toggle").css("opacity", "1");
        setTimeout(menutoggle, 2000);
    });
});