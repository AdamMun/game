$('.clockpicker').clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done',
    autoclose:'true'
});
$(function(){
  $(".daqu").on("click","li",function(event){
    var target = $(this);
    $(".daquctn").val(target.text());
  })
  $(".fuwuqi").on("click","li",function(event){
    var target = $(this);
    $(".fuwuqictn").val(target.text());
  })
  $(".fenlei").on("click","li",function(event){
    var target = $(this);
    $(".fenleictn").val(target.text());
  })
})

$(".jis").click(function(){
  $(".jishouxinxi").css("display","block");
})
$(".danb").click(function(){
  $(".jishouxinxi").css("display","none");
})


function bihe(){
  $(".tanchuang").css("display","none");
}
//窗口消失函数
function xiaoshi(){
  $(".jianjian").css("display","none");
}
//尖尖消失函数
bihe()
xiaoshi()

$(function(){
//游戏名称
  $("#yxmc").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"249px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#youximingcheng").css("display","block");
  });
  //游戏区
  $("#yxq").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"470px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#youxiqu").css("display","block");
  });
  //游戏服务器
  $("#yxfwq").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"689px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#youxifu").css("display","block");
  });
  //交易类别
  $("#jylb").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"908px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#jiaoyileibie").css("display","block");
  });
})

$(".guan").find('a').click(function(){
  bihe();
  xiaoshi()
});

$(function(){
  $("#youximingcheng").find('.list').find('a').click(function() {
    $("#yxmc").find("p").html($(this).text())
    bihe();
    xiaoshi()
  });
  $("#youxiqu").find('.list').find('a').click(function() {
    $("#yxq").find("p").html($(this).text())
    bihe();
    xiaoshi()
  });
  $("#youxifu").find('.list').find('a').click(function() {
    $("#yxfwq").find("p").html($(this).text())
    bihe();
    xiaoshi()
  });
  $("#jiaoyileibie").find('.list').find('a').click(function() {
    $("#jylb").find("p").html($(this).text())
    bihe();
    xiaoshi()
  });
})

$(".xingjikefu").find("li").each(function(){
  $(this).click(function(){
    $(".xingjikefu").find("li").css('background', 'white');
    $(this).css('background', '#fcf8e3');
    console.log($(this).index())
  })
})
