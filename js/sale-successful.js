$(function() {
    var i = 10;
    console.log(111)
    var play = setInterval(function() {
        if (i >= 1) {
            i--;
            $(".timeout").html(i);
        } else {
            window.location.href = "http://www.baidu.com"
            i == 10;
            clearInterval(play);
        }
    }, 1000)
})