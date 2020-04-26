let web = {
    header: function (page) {
        // let headerStr = '<header class="header-wrap">\
        //     <div class="header-wrap-inner">\
        //         <div class="header-inner">\
        //             <p class="header-item" onclick=skip("index")>首页</p>\
        //             <p class="header-item" onclick=skip("about")>关于我们</p>\
        //             <ul class="header-item" >\
        //                 <li style="display:block">讲师介绍</li>\
        //                 <ul class="header-item-ul">\
        //                     <li onclick=skip("lecturer","1")>1</li>\
        //                     <li onclick=skip("lecturer","2")>2</li>\
        //                 </ul>\
        //             </ul>\
        //             <ul class="header-item" >\
        //                 <li style="display:block">课程介绍</li>\
        //                 <ul class="header-item-ul">\
        //                     <li onclick=skip("course","1")>《中医外治学》</li>\
        //                     <li onclick=skip("course","2")>《中医外治学-实操课程》</li>\
        //                 </ul>\
        //             </ul>\
        //             <p class="header-item" onclick=skip("contactus")>联系我们</p>\
        //         </div>\
        //         <div class="header-logo">\
        //             <img src="./img/img1.png" alt="">\
        //         </div>\
        //     </div>\
        //     </header>'
        // $(".headerComponent").append(headerStr);
        // switch (page) {
        //     case "index":
        //         $(".header-wrap .header-item").eq(0).addClass("header-item-active")
        //         break;
        //     case "about":
        //         $(".header-wrap .header-item").eq(1).addClass("header-item-active")
        //         break;
        //     case "lecturer":
        //         $(".header-wrap .header-item").eq(2).addClass("header-item-active")
        //         break;
        //     case "course":
        //         $(".header-wrap .header-item").eq(3).addClass("header-item-active")
        //         break;
        //     case "contactus":
        //         $(".header-wrap .header-item").eq(4).addClass("header-item-active")
        //         break;
        //     default:
        //         break;
        // }
        // skip = function (type, num) {
        //     window.location.href = type + ".html" + (num ? "?id=" + num : "")
        // }
        // $('.header-item').hover(function (e) {
        //     // $(this).find("ul").stop();
        //     $(this).find("ul").slideDown();
        // }, function (e) {
        //     // $(this).find("ul").stop();
        //     $(this).find("ul").slideUp();
        // });
    },
    banner: function () {
        let bannerStr = '<div class="swiper-container">\
        <div class="swiper-wrapper">\
          <div class="swiper-slide section1"><img src="./img/banner.png" alt="" style="display: block;" /></div>\
          <div class="swiper-slide section1"><img src="./img/banner2.png" alt="" style="display: block;" /></div>\
        </div>\
      </div>'
        // let bannerStr = '<section class="section1">\
        //     <img src="./img/banner.png" alt="" style="display: block;" />\
        // </section>'
        $(".bannerComponent").append(bannerStr);
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            speed: 1000,
            grabCursor: true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        })

        //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
        new Swiper('.swiper-container')
        var mySwiper = document.querySelector('.swiper-container').swiper
        mySwiper.slideNext();
    },
    footer: function () {
        // let footerStr = '<section class="section6">\
        //                     <div class="section6-inner">\
        //                         <div style="width:25%">\
        //                             <div class="section6-item1">\
        //                                 关于我们\
        //                             </div>\
        //                             <div class="section6-item1-div1">\
        //                                 <span class="section6-item1-div1-span1">为天地立心 为生民立命</span>\
        //                                 <span class="section6-item1-div1-span2">为往圣继绝学\
        //                                     为万事开太平</span>\
        //                             </div>\
        //                         </div>\
        //                         <div style="width: 25%;">\
        //                             <div class="section6-item1">\
        //                                 精品课程\
        //                             </div>\
        //                             <div class="section6-item2-div2" onclick=skipFooter("./course","1")>\
        //                                 中医外治学\
        //                             </div>\
        //                             <div class="section6-item2-div3" onclick=skipFooter("./course","2")>\
        //                                 中医外治学-实操篇\
        //                             </div>\
        //                         </div>\
        //                         <div style="width: 25%;">\
        //                             <div class="section6-item1">\
        //                                 名师讲堂\
        //                             </div>\
        //                             <div class="section6-item3-div3" style="cursor: pointer;" onclick=skipFooter("./lecturer")>\
        //                                 王栋医学博士\
        //                             </div>\
        //                         </div>\
        //                         <div style="width: 25%;">\
        //                             <div class="section6-item1">\
        //                                 联系我们\
        //                             </div>\
        //                             <div class="section6-item4-div4">\
        //                             </div>\
        //                         </div>\
        //                     </div>\
        //                 </section>'
        // $(".footerComponent").append(footerStr);
        // skipFooter = function (type, num) {
        //     window.location.href = type + ".html" + (num ? "?id=" + num : "")
        // }
    }
}

