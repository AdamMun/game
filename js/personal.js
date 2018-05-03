
$(function(){
    $(".permeun").find("p").each(function(){
        $(this).click(function(){
            var u = $(this).parent().find("ul");
            var i = $(this).parent().find("i");
            if(u.hasClass("zero")){
                u.removeClass("zero");
                i.removeClass("glyphicon-menu-down");
                i.addClass("glyphicon-menu-up");
            }
            else{
                u.addClass("zero");
                i.removeClass("glyphicon-menu-up");
                i.addClass("glyphicon-menu-down");
            }
        })
    })  
})