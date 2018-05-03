$(function(){
  $(".wechat").click(function(){
    $(".wechat").addClass('active');
    $(".alipay").removeClass('active');
    $(".balance").removeClass('active');
    $(".wexinimg").css('display', 'block');
    $('.aliimg').css('display', 'none');
    $('.balanceimg').css('display', 'none');
  })
  $(".alipay").click(function(){
    $(".alipay").addClass('active');
    $(".wechat").removeClass('active');
    $(".balance").removeClass('active');
    $(".aliimg").css('display', 'block');
    $('.wexinimg').css('display', 'none');
    $('.balanceimg').css('display', 'none');
  })
  $(".balance").click(function(){
    $(".wechat").removeClass('active');
    $(".alipay").removeClass('active');
    $(".balance").addClass('active');
    $(".wexinimg").css('display', 'none');
    $('.aliimg').css('display', 'none');
    $('.balanceimg').css('display', 'block');
  })
})
