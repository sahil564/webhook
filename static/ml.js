
// const groupname=JSON.parse(document.getElementById("group-name").textContent)
// console.log("group Name....",groupname)



var ws = new WebSocket('ws://'+window.location.host + '/ws/pred/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)

    document.querySelector("#pred").innerText = djangoData;



    
}