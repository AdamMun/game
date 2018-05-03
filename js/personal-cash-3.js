$(function() {
    var i = 10;
    var int = setInterval(function() {
        i--;
        $("#num").html(i);
        if (i == 0) {
            window.location.href = "www.baidu.com";
            clearInterval(int);
        }
    }, 1000)
})