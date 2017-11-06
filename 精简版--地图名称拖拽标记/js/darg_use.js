$(function () {
    //初始化计数器
    var num = 0;
    //区块锁定标识
    var lock = false;
    function createBox(data) {
        var dataId = data.id || '';
        var value = data.text || '';
        var color = data.color || '';
        var height = data.height || 0;
        var width = data.width || 0;
        var pageX = data.pageX || 0;
        var pageY = data.pageY || 0;

        //更新计数器并记录当前计数
        var curNum = num++;
        //创建区域块
        var pos = $(".map_tag_box").position();
        var box = $('<div class="box" rel="' + curNum + '" dataId="' + dataId + '"><pre class="content">' + value + '</pre><div class="coor transparent"></div></div>').css({
            width: width,
            height: height,
            top: pageY > 0 ? pageY : (pos.top > 0 ? 0 : pos.top * -1 + 50),
            left: pageX > 0 ? pageX : (pos.left > 0 ? 0 : pos.left * -1 + 30)
        }).appendTo(".map_tag_box");
    }
    //创建拖拽方法
    $(".map_tag_box").on('mousedown', '.box', function (e) {
        if (lock) return;
        var pos = $(this).position();
        this.posix = { 'x': e.pageX - pos.left, 'y': e.pageY - pos.top };
        $.extend(document, { 'move': true, 'move_target': this });
        e.stopPropagation();
    })
    //测试加载
    var loadData = [
        { id: 1001, text: "北京", color: "#fff", height: 40, width: 80, pageX: 100, pageY: 50 },
        { id: 1002, text: "上海", color: "#fff", height: 40, width: 80, pageX: 100, pageY: 100 },
        { id: 1003, text: "广州", color: "#fff", height: 40, width: 80, pageX: 100, pageY: 150 },
        { id: 1004, text: "深圳", color: "#fff", height: 40, width: 80, pageX: 100, pageY: 200 },
        { id: 1004, text: "gdgdhf", color: "#fff", height: 40, width: 80, pageX: 100, pageY: 250 },
    ];
    $.each(loadData, function (i, row) {
        createBox(row);
    });
});