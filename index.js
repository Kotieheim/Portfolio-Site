console.log("working");

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({scrolltop: $(section).offset().top +100}, 4000);
});