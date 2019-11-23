$('a').click(function(){
    $('html, body, footer').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});