$(function(){

    $(".slide-top").click(function(){
        $("html,body").animate({'scrollTop':0},500)

    })


    $(document).on( 'scroll', function(){
        var h = $(window).scrollTop();
        var maxh = $(document).height();
        var currh = $(window).height();
        var num = Math.ceil((h-100)/160);
        var str = "portfolio-a";
        if(h>100 && h<(maxh-currh-1)){
            $(str).addClass('lishow');
        }else if(h>=(maxh-currh-1)){
            $('portfolio-a').addClass('lishow');
        }else{
            $('portfolio-a').removeClass('lishow');
        }
        
        
    });


    $('<img />',{ src: 'path_to_animated.gif'});

    $("#logo-img").hover(
        function() {
            $(this).attr("src", "/favicon/cupLogo-2.png");
        },
        function() {
            $(this).attr("src", "/favicon/cupLogo.png");
        }                         
    );     
    
    $("#hi").hover(
        function() {
            $(this).attr("src", "/favicon/hi4.png");
        },
        function() {
            $(this).attr("src", "/favicon/hi3.png");
        }                         
    );   



    function scroll() {
        var top = $("body").offset().top;//获取导航栏变色的位置距顶部的高度
        var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
        if (scrollTop <= top) {
            $('.bg').css('background-color', 'transparent');
        } else {
            $('.bg').css('background-color', 'white');
        }
    }
    $(window).on('scroll', function() {
        scroll()
    });


})