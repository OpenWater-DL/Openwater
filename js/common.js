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

})