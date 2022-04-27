//下面網址是Ajax的proxy + 即時雨量資料API
var dataUrl = "https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D";
var data = $.getJSON(dataUrl);

data.done(function (msg) {
    console.log(msg);
    Long = dataUrl.length;

    for (var i = 0; i < 5; i += 1) {
        $("#contain").append($('<h2>' + msg[i].stationName + '(' + msg[i].stationNo + ')' + '</h2>'));
        year = msg[i].recTime.substring(0, 4);
        month = msg[i].recTime.substring(4, 6);
        day = msg[i].recTime.substring(6,8);
        hour = msg[i].recTime.substring(8, 10);
        min = msg[i],recTime.substring(10, 12);
        $("#contain").append($('<h3>' + year + "年" + month + "月" + day + "日" + hour + "時" + min + "分" + '</h3>'));
        $("#contain").append($('<h3>' + "即時雨量: " + msg[i].rain + '</h3>'));
    }

});

data.fail(function (msg) {
    console.log(msg);
    alert('Fail');
});