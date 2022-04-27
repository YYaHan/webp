//下面網址是Ajax的proxy + 即時雨量資料API
var dataUrl = "https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D";
var data = $.getJSON(dataUrl);

data.done(function (msg) {
    console.log(msg);
    Long = dataUrl.length;

    for (var i = 0; i < 5; i += 1) {
        $("#contain").append($('<h2>' + msg[i].stationName + '(' + msg[i].stationNo + ')' + '</h2>'));
        //$("#contain").append('<div class="h3>' + msg[i].recTime[i] + '</div>');
        //$("#contain").append('<div class="h2">' + msg[i].stationName[i] + " " + "(" + msg[i].stationNo[i] + ")" + '</h2>');
    }

});

data.fail(function (msg) {
    console.log(msg);
    alert('Fail');
});