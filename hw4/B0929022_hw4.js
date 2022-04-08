var CODE = "QWERTYUIOPASDFGHJKLZXCVBNM";
var codeArray = [];
var timeArray = [];
var game_id = null;

//產生隨機字母
function createCode() {
    var index = [parseInt(Math.random() * 26)];
    return CODE.charAt(index);
};

function createLabel(code) {
    var label = document.createElement("label");
    label.className = "label";
    label.style.top = "50px";
    label.innerHTML = code;
    label.code = code;

    var html = document.documentElement;

    var labelY = parseInt(html.clientHeight);

    label.style.top = labelY + "px";

    return label;
}

window.onload = function () {
    document.getElementById("startBtn").disabled = false;

    document.documentElement.onkeydown = function (event) {
        var keyCode = event.keyCode; //獲取鍵盤的字符
        var code = String.fromCharCode(keyCode); //轉成大寫
        var label = codeArray[0];
        if (label.code == code) {
            clearInterval(label.interval_id);
            label.parentNode.removeChild(label);
            codeArray.splice(0, 1);
        }
    }
}

document.addEventListener('keydown', recordTime);
function recordTime() {
    var time = new Date();
    var theTime = time.getTime() / 100;
    timeArray.push(theTime);

    if (timeArray.length > 1) {
        var pos = timeArray.length - 1;
        var diff = (timeArray[pos] - timeArray[pos - 1]) / 1;
        if (diff >= 1) {
            addchar(diff);
        }
    }
}

function addchar(diff) {
    var r = Math.random() * 1.5;
    for (var i = 0; i < r; i++) {
        var code = createCode();
        var label = createLabel(code);
        document.body.insertAdjacentElement("afterend", label);
        codeArray.push(label);
    }
}

function startGame() {

    var header = document.getElementById("title");
    header.innerHTML = "你可以按按鍵以顯示字母進行遊戲";

}

function stopGame() {
    var header = document.getElementById("title");
    header.innerHTML = "遊戲結束";
    clearInterval(game_id);
    for (var i = 0; i < codeArray.length; i++) {
        clearInterval(codeArray[i].interval_id);
        codeArray[i].parentNode.removeChild(codeArray[i]);
    }
    codeArray = [];
    document.getElementById("startBtn").disabled = false;
}