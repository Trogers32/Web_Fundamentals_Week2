$(document).ready(function(){
    $('img').hover(function(){
        $(this).attr('src','funkcat.png');
    }, function(){
        $(this).attr('src', "dojocat.jpg");
    });
});