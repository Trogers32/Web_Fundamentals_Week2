$(document).ready(function(){
    /*$('h1').html('hello');
    $('h1').click(function(){
        $('p').toggle();
        $('h1').css('background-color', 'red');//toggleClass("btn btn-primary");
    });*/
    $('#hide').click(function(){
        $('#hidden h1').hide();
    });
    $('#show').click(function(){
        $('#hidden h1').show();
    });
    $('#toggle').click(function(){
        $('#toggled h1').toggle();
    });
    $('#slideUp').click(function(){
        $('#slider h1').slideUp();
    });
    $('#slideDown').click(function(){
        $('#slider h1').slideDown();
    });
    $('#slideToggle').click(function(){
        $('#slider h1').slideToggle();
    });
    $('#fadeOut').click(function(){
        $('#fade h1').fadeOut();
    });
    $('#fadeIn').click(function(){
        $('#fade h1').fadeIn();
    });
    $('#css').click(function(){
        $('#csss h1').css('background-color', 'red');
    });
    $('#after').click(function(){
        $('#insert h1').after("<p>WOW</p>");
    });
    $('#append').click(function(){
        $('#add h1').append(' HOLY MOLEY');
    });
    $('#prepend').click(function(){
        $('#add h1').prepend('WOWSER ');
    });
    $('#attr').click(function(){
        alert($('#attribute .a').prop("checked"));
    });
    $('#before').click(function(){
        $('#inserting h1').before('<p>SO COOL</p>');
    });
    $('#html').click(function(){
        alert($('#getEle').html());
    });
    $('#text').click(function(){
        alert($('#getText').text());
    });
    $('#val').click(function(){
        alert($('#textArea').val());
    });
    $('#clicked').click(function(){
        $('#click p').text("WOW YOU CHANGED ME");
    });
    $('#hovered').hover(function(){
        $('#hover p').text("LOOK AT THIS");
    });
});