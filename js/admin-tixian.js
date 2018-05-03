$(".dd").find("li").each(function() {
    $(this).click(function() {
        $(".dd").find("li").removeClass("active");
        $(this).addClass("active");
        if ($(this).text() == "提现订单") {
            $(".txdd").css('display', "block");
            $(".ytxdd").css('display', 'none');
        } else {
            $(".txdd").css('display', "none");
            $(".ytxdd").css('display', 'block');
        }
    })
})