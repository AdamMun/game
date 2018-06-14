$(".cash-num-content").find('a').eq(5).click(function() {
    alert("提现服务费率为提现金额的0.9%,最低为2元");
})
$(".cash-num-content").find('input').eq(0).change(function() {
    if ($(this).val() > $(".cash-num-content").find('a').eq(1).text()) {
        alert("输入有误，提现金额不可超过可提现金额");
        $(this).val(0);
        $(".cash-num-content").find('a').eq(4).html("");
        $(".cash-num-content").find('a').eq(6).html("");
    } else {
        var num = $(this).val() * 0.009
        if ($(this).val() <= 222) {
            $(".cash-num-content").find('a').eq(4).html("2");
            $(".cash-num-content").find('a').eq(6).html($(this).val() - 2)
        } else if ($(this).val() > 222) {
            console.log(num.toFixed(0))
            $(".cash-num-content").find('a').eq(4).html(num.toFixed(0) - 1 + 2);
            $(".cash-num-content").find('a').eq(6).html($(this).val() - num.toFixed(0) - 1)
        }

    }
})