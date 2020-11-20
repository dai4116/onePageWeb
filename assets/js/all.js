$(function () {
    //點擊nav選項畫面會移動到相對位置
    $(function () {

        $('.nav-link').click(function(){
            let anchor = $(this).attr('href');//取得個別點擊時的href，就是個別id的區塊 #page
            let linkScroll = $(anchor).offset().top;//每個區塊的最上方距離 document 最上方有多遠
            $("html,body").stop().animate({// 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
                scrollTop: linkScroll -55
            }, 700)
        })

    }), 
    $(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? ($(".toTop").fadeIn(), $(".header").addClass("fixed-top")) : ($(".toTop").fadeOut(), $(".header").removeClass("fixed-top"))
        }), $(".toTop").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 800)
        })
    }), 
    AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        once: !0
    })
});