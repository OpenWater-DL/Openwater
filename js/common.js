$(function() {


    //【返回顶部】

    $(".slide-top").click(function() {
        $("html,body").animate({ 'scrollTop': 0 }, 500)

    })




    //【网站图标的悬停动画】

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


    // 【手机端，下滑顶部出现白色】
    function scroll() {
        var top = $("body").offset().top; //获取导航栏变色的位置距顶部的高度
        var scrollTop = $(window).scrollTop(); //获取当前窗口距顶部的高度
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