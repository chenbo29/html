(function(win) {
    var tid;

    function refreshRem() {
        let designSize = 1920; // 设计图尺寸
        let html = document.documentElement;
        let wW = html.clientWidth; // 窗口宽度
        let rem;
        if (wW <= 800) {
            rem = 57;
        } else if (wW > 800 && wW <= 1200) {
            document.documentElement.style.fontSize = 57+ "px";
            return
        }else {
            rem = (wW * 100) / designSize;
        }
        document.documentElement.style.fontSize = rem + "px";
    }

    win.addEventListener(
        "resize",
        function() {
            refreshRem()
        },
        false
    );
    win.addEventListener(
        "pageshow",
        function(e) {
            if (e.persisted) {
                refreshRem()
            }
        },
        false
    );
    refreshRem();
})(window);