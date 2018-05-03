$(".cash-num-content").find('a').eq(5).click(function() {
    alert("提现服务费率为提现金额的1%");
})
$(".cash-num-content").find('input').eq(0).change(function() {
    if ($(this).val() > $(".cash-num-content").find('a').eq(1).text()) {
        alert("输入有误，提现金额不可超过可提现金额");
        $(this).val(0);
        $(".cash-num-content").find('a').eq(4).html(0);
        $(".cash-num-content").find('a').eq(6).html(0);
    } else {
        $(".cash-num-content").find('a').eq(4).html($(this).val() * 0.01);
        $(".cash-num-content").find('a').eq(6).html($(this).val() - $(this).val() * 0.01)
    }
})