$(function () {
    //點擊nav選項畫面會移動到相對位置
    $(function () {
            $('.nav-link').click(function () {
                let anchor = $(this).attr('href'); //取得個別點擊時的href，就是個別id的區塊 #page
                let linkScroll = $(anchor).offset().top; //每個區塊的最上方距離 document 最上方有多遠
                $("html,body").stop().animate({ // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
                    scrollTop: linkScroll - 55
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
    //數字動畫
    var options = {
        useEasing: true, // 使用缓和
        useGrouping: false, // 使用分组(是否显示千位分隔符,一般为 true)
    };
    new CountUp("num1", 5000, options).start();
    new CountUp("num2", 18000, options).start();
    new CountUp("num3", 1800, options).start();
    new CountUp("num4", 3000, options).start();
});