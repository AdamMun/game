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

$(".list").find("li").each(function() {
    $(this).click(function() {
        $("#mainimg")[0].src = $(this).find("img")[0].src;
    })
})

$('.screen').click(function() {
    console.log(111)
    bihe();
    xiaoshi();
    $(".screen").css('display', 'none');
})