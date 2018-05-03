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
  $(".qqyz").addClass("up");
  $("#wxkf").css("display","none");
  $(".qqyz").click(function(){
    $(".qqyz").addClass("up");
    $(".wxyz").removeClass("up");
    $("#wxkf").css("display","none");
    $("#qqkf").css("display","block");
  })
  $(".wxyz").click(function(){
    $(".wxyz").addClass("up");
    $(".qqyz").removeClass("up");
    $("#wxkf").css("display","block");
    $("#qqkf").css("display","none");
  })
})


$(function(){
  $(".tgg").addClass("up");
  $("#wthz").css("display","none");
  $(".tgg").click(function(){
    $(".tgg").addClass("up");
    $(".twthz").removeClass("up");
    $("#wthz").css("display","none");
    $("#gg").css("display","block");
  })
  $(".twthz").click(function(){
    $(".twthz").addClass("up");
    $(".tgg").removeClass("up");
    $("#wthz").css("display","block");
    $("#gg").css("display","none");
  })
})

$(function(){
  $(".dengl").addClass("up");
  $("#zc").css("display","none");
  $(".dengl").click(function(){
    $(".dengl").addClass("up");
    $(".zhuc").removeClass("up");
    $("#zc").css("display","none");
    $("#dl").css("display","block");
  })
  $(".zhuc").click(function(){
    $(".zhuc").addClass("up");
    $(".dengl").removeClass("up");
    $("#zc").css("display","block");
    $("#dl").css("display","none");
  })
})

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

var banner = document.getElementById('gundong');
var ulBanner = banner.getElementsByTagName('ul')[0];
var divBanner = banner.getElementsByTagName('div')[0];
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var arrImg = ["img/lunbo.png","img/lunbo.png","img/lunbo.png","img/lunbo.png","img/lunbo.png"];
var len = arrImg.length;
var str = "";
var str1 = "";
var index = 1;
var to;

for(var i = 0;i<len;i++){
    str += "<li><a href='#'><img src="+arrImg[i]+"></a></li>";
    str1 += "<span index="+(i+1)+"></span>";
}
ulBanner.innerHTML = "<li><a href='#'><img src="+arrImg[len-1]+"></a></li>"+str+"<li><a href='#'><img src="+arrImg[0]+"></a></li>";
divBanner.innerHTML = str1;
ulBanner.style.width = 700 * (len+2) + "px";

var btn = divBanner.getElementsByTagName("span");
btn[0].className = "on";
var falg = false;

function switchImg(offset){
        falg = true;
        var parLeft = parseInt(ulBanner.style.left) + offset;
        var time = 500;//偏移的总时间
        var mcpy = 10;//每次偏移的时间
        var speed = offset/(time/mcpy);
        function go(){
            if((speed < 0 && parseInt(ulBanner.style.left) > parLeft) || (speed > 0 && parseInt(ulBanner.style.left) < parLeft)){
                ulBanner.style.left =  parseInt(ulBanner.style.left) +speed + "px";
                setTimeout(go,mcpy);
            }
            else{
                falg = false;
                ulBanner.style.left = parLeft +"px";
                // - 4500 < -3600
                if(parLeft < -700*len){
                    ulBanner.style.left = -700 + "px";
                }
                // 0 > -900
                if(parLeft > -700){
                    ulBanner.style.left = -700*len + "px";
                }
            }
        }
        go();
    }

next.onclick = function(){
    if(!falg){
        if(index == btn.length){
        index = 1;
        }
        else{
            index = index + 1;
        }
        switchImg(-700);
        switchBtn();
    }

}
prev.onclick = function(){
  if(!falg){
      if(index == 1){
          index = btn.length;
      }
      else{
          index = index - 1;
      }
      switchImg(700);
      switchBtn();
  }
}

function switchBtn(){
    btn[index - 1].className = "on";
    for(var i = 0;i<btn.length;i++){
        if(index - 1 == i){

        }
        else{
            btn[i].className = "";
        }
    }
}
divBanner.onclick = function(event){
    target = event.target || event.srcElement;
    if(target.nodeName == "SPAN"){
        var myIndex = parseInt(target.getAttribute("index"));
        if(target.className == "on"){
            return;
        }
        switchImg(-700*(myIndex-index))
        index = myIndex;
        switchBtn();
        console.log(1)

    }
}
function startPlay(){
    to = setInterval(function(){
        next.onclick();
    },3000)

}
startPlay();
function stopPlay(){
  clearInterval(to);
}
banner.onmousemove = stopPlay;
banner.onmouseleave = startPlay;


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
