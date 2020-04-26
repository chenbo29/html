(function (win) {
    var tid;

    function refreshRem() {
        let designSize = 1080; // 设计图尺寸
        let html = document.documentElement;
        let wW = html.clientWidth; // 窗口宽度
        let rem;
        rem = (wW * 100) / designSize;
        document.documentElement.style.fontSize = rem + "px";
    }

    win.addEventListener(
        "resize",
        function () {
            refreshRem()
        },
        false
    );
    win.addEventListener(
        "pageshow",
        function (e) {
            if (e.persisted) {
                refreshRem()
            }
        },
        false
    );
    refreshRem();
})(window);