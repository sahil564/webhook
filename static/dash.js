const groupname=JSON.parse(document.getElementById("group-name").textContent)
console.log("group Name....",groupname)



var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[2])

    document.querySelector("#noise").innerText = myarray[1];



    
}
