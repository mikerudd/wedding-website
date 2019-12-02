$("button").click(function(event) {
    event.preventDefault();

    var validForm = $('#signin-form')[0].checkValidity();
    if(validForm){
        if(btoa($('#inputPassword').val()) === 'RGV2b24='){
            window.location.href='/wedding';
        } else {
            $("#inputPassword").addClass("is-invalid");
        }
    } else {
        $("#inputPassword").addClass("is-invalid");
        return false;
    }
});