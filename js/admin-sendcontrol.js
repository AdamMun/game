$(".checkall").click(function() {
    if ($(this).is(':checked') == true) {
        $('.tbcon').find("input[type='checkbox']").prop('checked', true)
    } else if ($(this).is(':checked') == false) {
        $('.tbcon').find("input[type='checkbox']").prop('checked', false)
    }
})