let web = {
    header: function (page) {
        let headerStr = '<header class="header-wrap">\
            <div class="header-wrap-inner">\
                <div class="header-inner">\
                    <p class="header-item" onclick=skip("index")>首页</p>\
                    <p class="header-item" onclick=skip("about")>关于我们</p>\
                    <p class="header-item" onclick=skip("lecturer")>讲师介绍</p>\
                    <p class="header-item" onclick=skip("course")>课程介绍</p>\
                    <p class="header-item" onclick=skip("contactus")>联系我们</p>\
                </div>\
                <div class="header-logo">\
                    <img src="./img/img1.png" alt="">\
                </div>\
            </div>\
            </header>'
        $(".headerComponent").append(headerStr);
        switch (page) {
            case "index":
                $(".header-wrap .header-item").eq(0).addClass("header-item-active")
                break;
            case "about":
                $(".header-wrap .header-item").eq(1).addClass("header-item-active")
                break;
            case "lecturer":
                $(".header-wrap .header-item").eq(2).addClass("header-item-active")
                break;
            case "course":
                $(".header-wrap .header-item").eq(3).addClass("header-item-active")
                break;
            case "contactus":
                $(".header-wrap .header-item").eq(4).addClass("header-item-active")
                break;
            default:
                break;
        }
        skip= function (type){
            window.location.href = type+".html"
        }
    },
    banner: function () {
        let bannerStr = '<section class="section1">\
            <img src="./img/banner.png" alt="" style="display: block;" />\
        </section>'
        $(".bannerComponent").append(bannerStr)
    },
    footer: function () {
        let footerStr = '<section class="section6">\
                            <div class="section6-inner">\
                                <div style="width:25%">\
                                    <div class="section6-item1">\
                                        关于我们\
                                    </div>\
                                    <div class="section6-item1-div1">\
                                        <span class="section6-item1-div1-span1">为天地立心 为生民立命</span>\
                                        <span class="section6-item1-div1-span2">为往圣继绝学\
                                            为万事开太平</span>\
                                    </div>\
                                </div>\
                                <div style="width: 25%;">\
                                    <div class="section6-item1">\
                                        精品课程\
                                    </div>\
                                    <div class="section6-item2-div2">\
                                        中医外治学\
                                    </div>\
                                    <div class="section6-item2-div3">\
                                        中医外治学-实操篇\
                                    </div>\
                                </div>\
                                <div style="width: 25%;">\
                                    <div class="section6-item1">\
                                        名师讲堂\
                                    </div>\
                                    <div class="section6-item3-div3">\
                                        王栋医学博士\
                                    </div>\
                                </div>\
                                <div style="width: 25%;">\
                                    <div class="section6-item1">\
                                        联系我们\
                                    </div>\
                                    <div class="section6-item4-div4">\
                                    </div>\
                                </div>\
                            </div>\
                        </section>'
        $(".footerComponent").append(footerStr)
    }
}

