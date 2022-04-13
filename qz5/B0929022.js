$('#mylist').click(function (e) {
    if (e.target.tagName.toLowerCase() == 'li') {
        console.log(e.target.textContent);
    }
    $('li').appendChild(createTextNode("hello cgu!"));
}, false);
