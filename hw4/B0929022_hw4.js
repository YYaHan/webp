var img = new Array();
img = ['id="A" src=img/A.png>', 'id="B" src=img/B.png>', 'id="C" src=img/C.png>', 'id="D" src=img/D.png>',
    'id="E" src=img/E.png>', 'id="F" src=img/F.png>', 'id="G" src=img/G.png>', 'id="H" src=img/H.png>', 'id="I" src=img/I.png>',
    'id="J" src=img/J.png>', 'id="K" src=img/K.png>', 'id="L" src=img/L.png>', 'id="M" src=img/M.png>', 'id="N" src=img/N.png>',
    'id="O" src=img/O.png>', 'id="P" src=img/P.png>', 'id="Q" src=img/Q.png>', 'id="R" src=img/R.png>', 'id="S" src=img/S.png>',
    'id="T" src=img/T.png>', 'id="U" src=img/U.png>', 'id="V" src=img/V.png>', 'id="W" src=img/W.png>', 'id="X" src=img/X.png>',
    'id="Y" src=img/Y.png>', 'id="Z" src=img/Z.png>',];
var time1 = 0;
var time2 = 0;
var CODE = ["#A", "#B", "#C", "#D", "#E", "#F", "#G", "#H", "#I",
    "#J", "#K", "#L", "#M", "#N", "#O", "#P", "#Q", "#R", "#S", "#T",
    "#U", "#V", "#W", "#X", "#Y", "#Z"];
var game_id = null;
race = ["#race1", "#race2", "#race3", "#race4", "#race5", "#race6"]
raceClass = ['<img class=ri1', '<img class=ri2', '<img class=ri3', '<img class=ri4', '<img class=ri5', '<img class=ri6'];

//產生隨機字母
function createCode() {
    var index = [parseInt(Math.random() * 26)];
    for (var i = 0; i < output; i++) {
        for (var j = 0; j < 6; j++) {
            $(race[j]).prepend(raceClass[j] + img[index]);
            $("img").animate({ left: "+=60px" });
        }
    }
}

function deleteCh(key) {
    var racenum = 0;
    var exist = 0;
    while (racenum < 26) {
        if (($(race[racenum]).children(CODE[key]).index() == -1) || ($(race[racenum]).children(CODE[key]).index() == 0)) {
            racenum++;
        }
        else {
            exist = 1;
            break;
        }
    }
    if (exist) {
        deletecodearray(race[racenum], CODE[key]);
    }
    var keyCode = event.keyCode; //獲取鍵盤的字符
    var code = String.fromCharCode(keyCode); //轉成大寫
    var label = codeArray[0];
    if (label.code == code) {
        clearInterval(label.interval_id);
        codeArray.splice(0, 1);
    }
}

function deletecodearray(race, Code) {
    $(race).children(Code).last().remove();
}

var interval = 0;
var calculate = 0;
var output = 0;

function recordTime() {
    time1 = new Date();
    if (time2 != time1 && time2 != 0) {
        interval = time1 - time2;
    }
    time2 = time1;
    calculate = interval + calculate;
    if (calculate > 700) {
        output = Math.floor(calculate / 700);
        calculate = calculate - output;
    }
    else {
        output = 0;
    }
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

$(document).ready(function () {
    $("#startBtn").click(function () {
        $(document).keydown(recordTime);
        $(document).keydown(function (key) {
            addchar();
            deleteCh(key.keyCode - 65);
        });
        var clk = setInterval(function () {
            if (($("img").filter(".race1").last().offset().left) >= 1100 || $("img").filter(".race2").last().offset().left >= 1100 || $("img").filter(".race3").last().offset().left >= 1100 || $("img").filter(".race4").last().offset().left >= 1100 || $("img").filter(".race5").last().offset().left >= 1100 || $("img").filter(".race6").last().offset().left >= 1100) {
                alert("輸光！");
                clearInterval(clk);
            }
            $("img").filter(".race1").animate({ left: "+=50px" });
            $("img").filter(".race2").animate({ left: "+=75px" });
            $("img").filter(".race3").animate({ left: "+=155px" });
            $("img").filter(".race4").animate({ left: "+=147px" });
            $("img").filter(".race5").animate({ left: "+=68px" });
            $("img").filter(".race6").animate({ left: "+=98px" });
        }, 1000);
    });
});

$(document).ready(function () {
    $("#button").click(stopGame);
});