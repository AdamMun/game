$(".inpvalue").focus(function() {
    $(".wexinimg").css("display", "none");
    $(".aliimg").css("display", "none");
});
$(".inpvalue").blur(function() {
    if ($(this).val() == "") {
        $(".num").html("")
    } else {
        $(".num").html($(this).val());
    }
});

$(".wechat").click(function() {
    $(".wexinimg").css("display", "flex");
    $(".aliimg").css("display", "none");
    $(".wechat").addClass("active");
    $(".alipay").removeClass("active");
});
$(".alipay").click(function() {
    $(".wexinimg").css("display", "none");
    $(".aliimg").css("display", "flex");
    $(".alipay").addClass("active");
    $(".wechat").removeClass("active");

});