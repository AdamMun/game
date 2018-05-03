function fun() {
    $('.readed').removeClass('active');
    $('.read').removeClass('active');
    $('.one').css('display', 'none');
    $('.two').css('display', 'none');
}
$(function() {
    $('.readed').click(function() {
        fun();
        $(this).addClass('active');
        $('.one').css('display', 'block');
    })
    $('.read').click(function() {
        fun();
        $(this).addClass('active');
        $('.two').css('display', 'block');
    })
})