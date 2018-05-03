$(function() {
    var picker1 = $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: moment.locale('zh-cn'),
        //minDate: '2016-7-1'  
    });
    var picker2 = $('#datetimepicker2').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: moment.locale('zh-cn')
    });
    //动态设置最小值  
    picker1.on('dp.change', function(e) {
        picker2.data('DateTimePicker').minDate(e.date);
    });
    //动态设置最大值  
    picker2.on('dp.change', function(e) {
        picker1.data('DateTimePicker').maxDate(e.date);
    });
});
$(".detailtable").css("display", "none");
$(".detailtable").eq(0).css("display", "block");
$(function() {
    $(".detailtitle").find("li").each(function() {
        $(this).click(function() {
            $(".detailtable").css("display", "none");
            $(".detailtitle").find("li").removeClass("active");
            $(this).addClass("active");
            console.log($(this).index())
            if ($(this).index() == 0) {
                $(".quanbu").css("display", "block");
            } else if ($(this).index() == 1) {
                $(".daifukuan").css("display", "block");
            } else if ($(this).index() == 2) {
                $(".daifahuo").css("display", "block");
            } else if ($(this).index() == 3) {
                $(".daiqueren").css("display", "block");
            } else if ($(this).index() == 4) {
                $(".jiaoyiwancheng").css("display", "block");
            } else if ($(this).index() == 5) {
                $(".jiaoyiquxiao").css("display", "block");
            }
        })
    })
})