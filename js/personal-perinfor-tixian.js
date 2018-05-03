$(".txwx").click(function() {
    $(this).addClass("active");
    $('.txalipay').removeClass('active');
    $(".wx").css('display', 'block');
    $('.alipay').css('display', 'none');
})
$(".txalipay").click(function() {
    $(this).addClass("active");
    $('.txwx').removeClass('active');
    $(".wx").css('display', 'none');
    $('.alipay').css('display', 'block');
})