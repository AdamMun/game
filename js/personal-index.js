var now = new Date;
var hour = now.getHours()
if(hour < 6){
    $(".AP").html("凌晨好！")
} 
else if (hour < 9){
    $(".AP").html("早上好！")
} 
else if (hour < 12){
    $(".AP").html("上午好！")
} 
else if (hour < 14){
    $(".AP").html("中午好！")
} 
else if (hour < 17){
    $(".AP").html("下午好！")
} 
else if (hour < 19){
    $(".AP").html("傍晚好！")
} 
else if (hour < 22){
    $(".AP").html("晚上好！")
} 
else {
    $(".AP").html("夜深了，请注意休息！")
} 