function bihe() {
    $(".tanchuang").css("display", "none");
}
//窗口消失函数
function xiaoshi() {
    $(".jianjian").css("display", "none");
}
//尖尖消失函数
bihe()
xiaoshi()


$(function() {
    $(".qqyz").addClass("up");
    $("#wxkf").css("display", "none");
    $(".qqyz").click(function() {
        $(".qqyz").addClass("up");
        $(".wxyz").removeClass("up");
        $("#wxkf").css("display", "none");
        $("#qqkf").css("display", "block");
    })
    $(".wxyz").click(function() {
        $(".wxyz").addClass("up");
        $(".qqyz").removeClass("up");
        $("#wxkf").css("display", "block");
        $("#qqkf").css("display", "none");
    })
})


$(function() {
    $(".tgg").addClass("up");
    $("#wthz").css("display", "none");
    $(".tgg").click(function() {
        $(".tgg").addClass("up");
        $(".twthz").removeClass("up");
        $("#wthz").css("display", "none");
        $("#gg").css("display", "block");
    })
    $(".twthz").click(function() {
        $(".twthz").addClass("up");
        $(".tgg").removeClass("up");
        $("#wthz").css("display", "block");
        $("#gg").css("display", "none");
    })
})

$(function() {
    $(".dengl").addClass("up");
    $("#zc").css("display", "none");
    $(".dengl").click(function() {
        $(".dengl").addClass("up");
        $(".zhuc").removeClass("up");
        $("#zc").css("display", "none");
        $("#dl").css("display", "block");
    })
    $(".zhuc").click(function() {
        $(".zhuc").addClass("up");
        $(".dengl").removeClass("up");
        $("#zc").css("display", "block");
        $("#dl").css("display", "none");
    })
})

$(function() {
    $(".acc").addClass("pu");
    $(".simpleSearch").css("display", "none");
    $(".acc").click(function() {
        $(".acc").addClass("pu");
        $(".sim").removeClass("pu");
        $(".simpleSearch").css("display", "none");
        $(".accurateSearch").css("display", "block");
    })
    $(".sim").click(function() {
        bihe()
        xiaoshi()
        $(".sim").addClass("pu");
        $(".acc").removeClass("pu");
        $(".simpleSearch").css("display", "block");
        $(".accurateSearch").css("display", "none");
    })
})

$(function() {
    //游戏名称
    $("#yxmc").click(function() {
        bihe();
        $('.jianjian').animate({
            left: "474px"
        }, 300);
        $(".jianjian").css('display', 'block');
        $("#youximingcheng").css("display", "block");
        $(".screen").css('display', 'block');
    });
    //游戏区
    $("#yxq").click(function() {
        bihe();
        $('.jianjian').animate({
            left: "595px"
        }, 300);
        $(".jianjian").css('display', 'block');
        $("#youxiqu").css("display", "block");
        $(".screen").css('display', 'block');
    });
    //游戏服务器
    $("#yxfwq").click(function() {
        bihe();
        $('.jianjian').animate({
            left: "715px"
        }, 300);
        $(".jianjian").css('display', 'block');
        $("#youxifu").css("display", "block");
        $(".screen").css('display', 'block');
    });
    //交易类别
    $("#jylb").click(function() {
        bihe();
        $('.jianjian').animate({
            left: "835px"
        }, 300);
        $(".jianjian").css('display', 'block');
        $("#jiaoyileibie").css("display", "block");
        $(".screen").css('display', 'block');
    });
})

$(".guan").find('a').click(function() {
    bihe();
    xiaoshi()
    $(".screen").css('display', 'none');
});

$(function() {
    $("#youximingcheng").find('.list').find('a').click(function() {
        $("#yxmc").find("p").html($(this).text())
        $("#yxq").click();
    });
    $("#youxiqu").find('.list').find('a').click(function() {
        $("#yxq").find("p").html($(this).text())
        $("#yxfwq").click();
    });
    $("#youxifu").find('.list').find('a').click(function() {
        $("#yxfwq").find("p").html($(this).text())
        $("#jylb").click();
    });
    $("#jiaoyileibie").find('.list').find('a').click(function() {
        $("#jylb").find("p").html($(this).text())
        bihe();
        xiaoshi();
        $(".screen").css('display', 'none');
    });
})
$('.screen').click(function() {
    console.log(111)
    bihe();
    xiaoshi();
    $(".screen").css('display', 'none');
})