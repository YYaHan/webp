setInterval(function () {
    date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    console.log(hour);
    console.log(min);
    console.timeLog(sec);
    
    var TIME = hour + ":" + min + ":" + sec;
    $("#demo").text(TIME);
}, 100);

