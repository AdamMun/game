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
  $(".acc").addClass("pu");
  $(".simpleSearch").css("display","none");
  $(".acc").click(function(){
    $(".acc").addClass("pu");
    $(".sim").removeClass("pu");
    $(".simpleSearch").css("display","none");
    $(".accurateSearch").css("display","block");
  })
  $(".sim").click(function(){
    bihe()
    xiaoshi()
    $(".sim").addClass("pu");
    $(".acc").removeClass("pu");
    $(".simpleSearch").css("display","block");
    $(".accurateSearch").css("display","none");
  })
})

$(function(){
//游戏名称
  $("#yxmc").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"474px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#youximingcheng").css("display","block");
  });
  //游戏区
  $("#yxq").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"595px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#youxiqu").css("display","block");
  });
  //游戏服务器
  $("#yxfwq").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"715px"
    }, 300);
    $(".jianjian").css('display', 'block');
    $("#youxifu").css("display","block");
  });
  //交易类别
  $("#jylb").click(function(){
    bihe();
    $('.jianjian').animate({
      left:"835px"
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
  });
})
//布尔值确定
var boolone = true;
var booltwo = true;
var boolthree = true;
$(function(){
  //服务器添加选项
  $("#onfuwuqi").on("click","li",function(event){
    var target = $(event.target);
    if(boolone == true){
      $("#Mtitle").append("<li>"+$(this).text()+"<div class = ''><a href = 'javascript:;' class = 'aone'>+</a></div></li>")
      boolone = false;
      $(".fuwuqi").css('display', 'none');
    }
  })
  $("#onxiaoqu").on("click","li",function(event){
    if (booltwo == true) {
      $("#Mtitle").append("<li>"+$(this).text()+"<div class = ''><a href = 'javascript:;' class = 'atwo'>+</a></div></li>")
      booltwo = false;
      $(".xiaoqu").css('display', 'none');
    }
  })
  $("#onjiaoyifenlei").on("click","li",function(event){
    if (boolthree == true) {
      $("#Mtitle").append("<li>"+$(this).text()+"<div class = ''><a href = 'javascript:;' class = athree>+</a></div></li>")
      boolthree = false;
      $(".jiaoyifenlei").css('display', 'none');
    }
  })
})
//选项删除
$(function(){
  $("#Mtitle").on("click","a",function(event){
    var target = $(event.target);
    if(target.hasClass('aone')){
      boolone =true;
      target.parent().parent().remove();
      $(".fuwuqi").css('display', 'block');
    }else if (target.hasClass('atwo')) {
      booltwo = true;
      target.parent().parent().remove();
      $(".xiaoqu").css('display', 'block');
    }else if (target.hasClass('athree')){
      boolthree = true;
      target.parent().parent().remove();
      $(".jiaoyifenlei").css('display', 'block');
    }
  })
})
//状态查询
$(function(){
  $("#Mtitle").bind('DOMNodeInserted', function(e) {
     $("#Mtitle").find("a").each(function(){
       $(".aone").click(function(){
         $(".atwo").parent().parent().remove();
         booltwo = true;
         $(".xiaoqu").css('display', 'block');
       })
     })
  });
})

// var reboola = true;
// var reboolb = true;
// var reboolc = true;
// var reboold = true;
// $("#normalRank").addClass('pu')
// $(function(){
//   var remo = function(){
//     $("#rank").find("li").each(function(){
//       $(this).removeClass('pu');
//       $("#timeRank").html("时间排序");
//       $("#priceRank").html("价格排序");
      // $("#starRank").html("星级排序");
      // $("#creditRank").html("信用排序");
  //   })
  // }
  // $("#rank").on("click","li",function(event){
  //   var target = $(event.target);
  //   if(target.attr("id")=="normalRank"){
  //     reboolb = true;
  //     remo();
  //     $(this).addClass('pu');
  //   }
    // else if (target.attr("id")=="timeRank"){
    //   reboolb = true;
    //   reboolc = true;
    //   reboold = true;
    //   if (reboola == true) {
    //     remo();
    //     $(this).addClass('pu');
    //     $(this).html('时间排序(升序)');
    //     reboola = false
    //   }else{
    //     $(this).html("时间排序(降序)");
    //     reboola = true;
    //   }
    // }
    // else if (target.attr("id")=="priceRank"){
      // reboola = true;
      // reboolc = true;
      // reboold = true;
    //   if (reboolb == true) {
    //     remo();
    //     $(this).addClass('pu');
    //     $(this).html('价格排序(升序)');
    //     reboolb = false
    //   }else{
    //     $(this).html("价格排序(降序)");
    //     reboolb = true;
    //   }
    // }
    // else if (target.attr("id")=="starRank"){
    //   reboola = true;
    //   reboolb = true;
    //   reboold = true;
    //   if (reboolc == true) {
    //     remo();
    //     $(this).addClass('pu');
    //     $(this).html('星级排序(升序)');
    //     reboolc = false
    //   }else{
    //     $(this).html("星级排序(降序)");
    //     reboolc = true;
    //   }
    // }
    // else if (target.attr("id")=="creditRank"){
    //   reboola = true;
    //   reboolb = true;
    //   reboolc = true;
    //   if (reboold == true) {
    //     remo();
    //     $(this).addClass('pu');
    //     $(this).html('信用排序(升序)');
    //     reboold = false
    //   }else{
    //     $(this).html("信用排序(降序)");
    //     reboold = true;
    //   }
    // }
//   })
// })

var onebool = true;
var twobool = true;
var threebool = true;
var normalbool = false;
var pricebool = false;


$(function(){
  if(onebool == true){
    $(".fuwuqi").css("display","none");
  }else if(onebool == false){
    $(".fuwuqi").css("display","block");
  }

  if(twobool == true){
    $(".fuwuqi").css("display","none");
    $(".xiaoqu").css("display","none");
  }else if(twobool == false){
    $(".xiaoqu").css("display","block");
  }

  if(threebool == true){
    $(".jiaoyifenlei").css("display","none");
  }else if(threebool == false){
    $(".jiaoyifenlei").css("display","block");
  }
})

$(function(){
  if(normalbool == true){
    $("#normalRank").addClass("pu")
  }else if(normalbool == false&&pricebool == true){
    $("#priceRank").addClass("pu");
    $("#priceRank").html("价格排序（升序）")
  }else if(normalbool == false&&pricebool == false){
    $("#priceRank").addClass("pu");
    $("#priceRank").html("价格排序（降序）")
  }
})


