$(document).ready(function(){
    $('#scroll-to').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    var height = $('.cd-gallery .mix').width();
    $('.cd-gallery .mix').css({'height':height+'px'});
    
    
    
    
    $(window).resize(function(){
       var height = $('.cd-gallery .mix').width();
       $('.cd-gallery .mix').css({'height':height+'px'});
                
    });



    // Clients logo sizes
    
//    $(".logo-area").css({
//        'width': $('.client-logo .google').width() + 'px',
//        'height': $('.client-logo .google').height() + 'px'
//    });
    
    
    $(".shadow-google").css({
        'width': $('.client-logo .google').width() + 'px',
        'height': $('.client-logo .google').height() + 'px'
    }).siblings(".logo-area").css({
        'width': $('.client-logo .google').width() + 'px',
        'height': $('.client-logo .google').height() + 'px'
    });
    
    
    $(".shadow-yahoo").css({
        'width': $('.client-logo .yahoo').width() + 'px',
        'height': $('.client-logo .yahoo').height() + 'px'
    });
    $(".shadow-microsoft").css({
        'width': $('.client-logo .microsoft').width() + 'px',
        'height': $('.client-logo .microsoft').height() + 'px'
    });
    $(".shadow-intel").css({
        'width': $('.client-logo .intel').width() + 'px',
        'height': $('.client-logo .intel').height() + 'px'
    });
    $(".shadow-qualcomm").css({
        'width': $('.client-logo .qualcomm').width() + 'px',
        'height': $('.client-logo .qualcomm').height() + 'px'
    });
    $(".shadow-cisco").css({
        'width': $('.client-logo .cisco').width() + 'px',
        'height': $('.client-logo .cisco').height() + 'px'
    });
    $(".shadow-apple").css({
        'width': $('.client-logo .apple').width() + 'px',
        'height': $('.client-logo .apple').height() + 'px'
    });
    $(".shadow-asus").css({
        'width': $('.client-logo .asus').width() + 'px',
        'height': $('.client-logo .asus').height() + 'px'
    });

    
    $(".shadow-cnn").css({
        'width': $('.client-logo .cnn').width() + 'px',
        'height': $('.client-logo .cnn').height() + 'px'
    });

    $(".shadow-tech_crunch").css({
        'width': $('.client-logo .tech_crunch').width() + 'px',
        'height': $('.client-logo .tech_crunch').height() + 'px'
    });

    $(".shadow-bbc").css({
        'width': $('.client-logo .bbc').width() + 'px',
        'height': $('.client-logo .bbc').height() + 'px'
    });

    $(".shadow-nytimes").css({
        'width': $('.client-logo .nytimes').width() + 'px',
        'height': $('.client-logo .nytimes').height() + 'px'
    });


    
    
//    $(".shadow-client" ).hover(function(){
//        $(this).siblings().css({"display": "inline"});
//        $(this).css({"display": "none"});
//    });
    
//    $( ".client-logo img" ).mouseover(function() {
//       $(this).siblings().css({"display": "inline"});
//       $(this).css({"display": "none"});
//    });
    
    $( ".logo-area" ).hover(function() {
        $(this).find(".logo-image").css({"display": "inline"});
        $(this).find(".shadow-client").addClass( "hide-shadow" );
      }, function(){
        $(this).find(".logo-image").css({"display": "none"});
        $(this).find(".shadow-client").removeClass( "hide-shadow" );
    });
    
    
    
    
    
    
    
});




