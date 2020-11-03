$(function () {
    // 初始化tips
    $('[data-toggle="tooltip"]').tooltip()
    var items = $(".carousel-inner .item");
    $(window).on("resize", function () {
        var width = $(window).width();
        if (width >= 768) {
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("largeImage");
                item.html($('<a href="javascrip:;" class="pcImg">').css("backgroundImage", "url('" + imgSrc + "')"));
            })
        } else {
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("smallImage");
                item.html('<a href="javascrip:;" class="mobileImg"><img src="' + imgSrc + '">');
            });
        }
    }).trigger("resize");


    /* 导航栏滚动条 */
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth = 0;
    lis.each(function (index, value) {
        totalWidth += $(value).innerWidth();
    });
    ul.width(totalWidth);

    var myScroll = new IScroll('.tabs_parent', {
        scrollx: true, scrolly: false
    });


});

