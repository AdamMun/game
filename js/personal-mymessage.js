function fun() {
    $('.readed').removeClass('active');
    $('.read').removeClass('active');
}
$(function() {
    $('.readed').click(function() {
        fun();
        $(this).addClass('active');
    })
    $('.read').click(function() {
        fun();
        $(this).addClass('active');
    })
})