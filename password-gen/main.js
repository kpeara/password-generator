
var button = document.getElementById("button");
var output = document.getElementById("screen");


button.addEventListener("click",function() {
    output.removeAttribute("style");

    var onRequest = new XMLHttpRequest();

    onRequest.open("GET","http://www.filltext.com/?rows=3&pretty=true&id={string|5}")
    
    onRequest.onload = function() {

        var data = JSON.parse(onRequest.responseText);
        generatePass(data);
    }

    onRequest.send();

});

function generatePass(data) {
    var password ="";
    for (i = 0; i < data.length; i++) {
        if (i == 0) {
            password += data[i].id;
        }
        else {
            password += "-" + data[i].id;
        }
    }

    output.innerText = password;
}
