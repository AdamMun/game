$(".left_meun").find("ul").each(function(){
  $(this).addClass("on");
});
$(".left_meun").find("p").click(function(){
  var i = $(this).parent()
  i.find("ul").each(function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
  });
})
console.log(111)



