var dataUrl = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON";
var data = $.getJSON(dataUrl);

station = ["#A1", "#A2", "#A3", "#A4", "#A5", "#A6", "#A7", "#A8", "#A9", "#A10", "#A11", "#A12", "#A13", "#A14", "#A15", "#A16", "#A17", "#A18", "#A19", "#A20", "#A21"];

data.done(function (msg) {
    console.log(msg);
    mLong = msg.length;
    console.log(mLong);
    
    for (var i = 419; i >= 0; i-=21) {
        console.log(msg[i].OriginStationID + "To" + msg[i].DestinationStationID + "Time: " + msg[i].TravelTime + "Price: " + msg.Fares[0] + "i=" + i);
        console.log((i + 22) / 21);
        $('<h1 id=station'+(i+22)/21+'><img src="img/A'+(i+22)/21+'.png"></h1>').insertAfter("#title");
        $('<h1 id=br'+(i+22)/21+'></h1>').insertAfter("#title");
        $(station[(i+22)/20]).prepend('<div class="p3" id=sta'+(i+22)/21+'>'+msg[i].Fares[0].Price+'</div>');
        $(station[(i+22)/20]).prepend('<div class="p3"><img class="point"src=img/p.png></div>');
        $(station[(i+22)/20]).prepend('<div class="p3" id=sta'+(i+22)/21+'>'+msg[i].TravelTime+'</div>');
    }

    $('<h1 id="A1"><img src="img/A1.png"></h1>').insertAfter("#title");
});

data.fail(function(msg){
    console.log(msg);
    $("#contain").html("It is fail.");
});

