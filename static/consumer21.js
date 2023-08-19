
const groupname=JSON.parse(document.getElementById("group-name").textContent)
console.log("group Name....",groupname)

const fftdata=JSON.parse(document.getElementById("fft").textContent)

console.log("this is fft data",fftdata)

const temp=JSON.parse(document.getElementById("temp").textContent)

console.log("this is temp data",temp)
const noise=JSON.parse(document.getElementById("noise").textContent)

console.log("this is noise data",noise)
const x=JSON.parse(document.getElementById("x").textContent)

console.log("this is x data",x)
const y=JSON.parse(document.getElementById("y").textContent)

console.log("this is y data",y)
const z=JSON.parse(document.getElementById("z").textContent)

console.log("this is z data",z)

const press=JSON.parse(document.getElementById("press").textContent)

console.log("this is press data",press)


const macid= [];

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[12])
    // macid.push(myarray[12]);


    document.querySelector("#macID").innerText = macid;



    
}










var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    // console.log(myarray[6])

    document.querySelector("#pred").innerText = myarray[12];



    
}







var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[12])


    document.querySelector("#datalen").innerText = myarray[13];



    
}


var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[13])


    document.querySelector("#data").innerText = myarray[14];



    
}



var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[13])
    var humadity = Math.floor((myarray[5]));


    document.querySelector("#humadity").innerText = humadity;



    
}


var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[1])
    var noise = Math.floor((myarray[1]));


    document.querySelector("#noise").innerText = noise;



    
}


var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    console.log("this is pred websocket",djangoData)
    const myarray=djangoData.split(",")
    console.log(myarray[13])
    var smoke = Math.floor((myarray[9]));


    document.querySelector("#smoke").innerText = smoke;



    
}

// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     console.log("this is pred websocket",djangoData)
//     const myarray=djangoData.split(",")
//     console.log(myarray[8])


//     document.querySelector("#datalen").innerText = myarray[8];



    
// }


// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     console.log("this is pred websocket",djangoData)
//     const myarray=djangoData.split(",")
//     console.log(myarray[9])


//     // document.querySelector("#datalen").innerText = myarray[7];



    
// }

// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     console.log("this is pred websocket",djangoData)
//     const myarray=djangoData.split(",")
//     console.log(myarray[10])


//     // document.querySelector("#datalen").innerText = myarray[10];



    
// }




// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     console.log("this is pred websocket",djangoData)
//     const myarray=djangoData.split(",")
//     console.log(myarray[11])


//     // document.querySelector("#data").innerText = myarray[11];



    
// }






























const ctx = document.getElementById('myChart').getContext('2d');

var graphData = {
    type: 'line',
    data: {
        labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
        datasets: [{
            label: 'Temperature',
            data:temp,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            zoom: {
                pan: {
                  enabled:true,
                },
                zoom: {
                 wheel:{
                    enabled: true,
                    //speed:0.1, speedup zooming or zoomout
                  }

                    
               }
            }
        }
    }
}
var myChart = new Chart(ctx, graphData );  

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    // console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    const myarray=djangoData.split(",")
    // console.log("first",myarray[0])
    // console.log("second",myarray[1])
    // console.log("third",myarray[2])
    // console.log("forth",myarray[3])
    // console.log("fifth",myarray[4])
    // console.log("six",myarray[5])
    // console.log("seven",myarray[6])

    var v=myarray[0]
    var s=" "
    // console.log(t)
    
    // console.log("value before change",v)
    var intvalue = Math.floor((myarray[0]));
    console.log("After change",intvalue)
    document.querySelector("#app").innerText = intvalue;
    var newLevel=graphData.data.labels
    // console.log(newLevel)
    var newGraphData = graphData.data.datasets[0].data;
    // console.log(newGraphData)
    // newLevel.shift();
    // newLevel.push(s)
    // function yourFunction(){
    //     // do whatever you like here
    //     newLevel.shift();
    //     newLevel.push(myarray[5])
    
    //     setTimeout(yourFunction, 5000);
    // }
    
    // yourFunction();
    var s=" "
    var newLevel=graphData.data.labels
    if (myarray[10]) {

    var timestamp = myarray[10];
    var date = new Date(timestamp*1000);
    var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    console.log(s)


        newLevel.shift();
        newLevel.push(s)
        
      } else {
        newLevel.shift();
        newLevel.push(s)
        //  block of code to be executed if the condition is false
      }
    newGraphData.shift();
    newGraphData.push(v);
    graphData.data.datasets[0].data = newGraphData;
    myChart.update();

}

function ZoomChartIn(){
    myChart.zoom(1.1)
 
}


function ZoomChartOut(){
    myChart.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChart(){
    myChart.resetZoom();
}



function changelinet(){
    const updatetype = 'line'
    myChart.config.type = updatetype
    myChart.update();
};

function changebart(){
    const updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
}



















const ctx1 = document.getElementById('myChart1').getContext('2d');

var graphData1 = {
    type: 'line',
    data: {
        labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
        datasets: [{
            label: 'Noise',
            data:noise,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            zoom: {
                pan: {
                  enabled:true,
                },
                zoom: {
                 wheel:{
                    enabled: true,
                    //speed:0.1, speedup zooming or zoomout
                  }

                    
               }
            }
        }
    }
}
var myChart1 = new Chart(ctx1, graphData1 );  

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    // console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    // console.log("this is ",djangoData);
    const myarray=djangoData.split(",")
    // console.log(myarray[1])
    // console.log(myarray[2])
    var v = Math.floor((myarray[1]));
    // var v=myarray[1]
    // console.log(myarray[3])
    document.querySelector("#app1").innerText = v;
    var newGraphData1 = graphData1.data.datasets[0].data;
    var s=" "
    var newLevel1=graphData1.data.labels
    if (myarray[10]) {

    var timestamp = myarray[10];
    var date = new Date(timestamp*1000);
    var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    console.log(s)


        newLevel1.shift();
        newLevel1.push(s)
        
      } else {
        newLevel1.shift();
        newLevel1.push(s)
        //  block of code to be executed if the condition is false
      }
    newGraphData1.shift();
    newGraphData1.push(v);
    graphData1.data.datasets[0].data = newGraphData1;
    myChart1.update();

}


function ZoomChartInn(){
    myChart1.zoom(1.1)
 
}


function ZoomChartOutn(){
    myChart1.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartn(){
    myChart1.resetZoom();
}



function changelinen(){
    const updatetype = 'line'
    myChart1.config.type = updatetype
    myChart1.update();
};

function changebarn(){
    const updatetype = "bar";
    myChart1.config.type = updatetype;
    myChart1.update();
}

























const ctx2 = document.getElementById('myChart2').getContext('2d');

var graphData2 = {
    type: 'line',
    data: {
        labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
        datasets: [{
            label: 'X_axis',
            data: x,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            zoom: {
                pan: {
                  enabled:true,
                },
                zoom: {
                 wheel:{
                    enabled: true,
                    //speed:0.1, speedup zooming or zoomout
                  }

                    
               }
            }
        }
    }
}
var myChart2 = new Chart(ctx2, graphData2 );  

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    // console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    // console.log("this is ",djangoData);
    const myarray=djangoData.split(",")
    // console.log(myarray[1])
    // console.log(myarray[2])
    var v = Math.floor((myarray[2]));
    // var v=myarray[2]
    // console.log(myarray[2])
    document.querySelector("#app2").innerText = v;
    var newGraphData2 = graphData2.data.datasets[0].data;
    var s=" "
    var newLevel2=graphData2.data.labels
    if (myarray[10]) {

    var timestamp = myarray[10];
    var date = new Date(timestamp*1000);
    var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    console.log(s)


        newLevel2.shift();
        newLevel2.push(s)
        
      } else {
        newLevel2.shift();
        newLevel2.push(s)
        //  block of code to be executed if the condition is false
      }
    newGraphData2.shift();
    newGraphData2.push(v);
    graphData2.data.datasets[0].data = newGraphData2;
    myChart2.update();

}

function ZoomChartInx(){
    myChart2.zoom(1.1)
 
}


function ZoomChartOutx(){
    myChart2.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartx(){
    myChart2.resetZoom();
}

function changelinex(){
    const updatetype = 'line'
    myChart2.config.type = updatetype
    myChart2.update();
};

function changebarx(){
    const updatetype = "bar";
    myChart2.config.type = updatetype;
    myChart2.update();
}


function FFTx(){
  
    const newlabel = fftdata;
    const datanew=[1,2,4,4,5,4,3,3,4,3,4,50,90,30]
    
    myChart2.config.data.labels=newlabel
    myChart2.config.data.datasets[0].data = fftdata;
    data.datasets[0].data.pop()
    myChart2.update();
}




function livex(){
    const updatetype = 'line'
    myChart2.config.type = updatetype
    myChart2.config.data.labels =["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
    myChart2.config.data.datasets[0].data =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    myChart2.update();


    

}


























const ctx3 = document.getElementById('myChart3').getContext('2d');

var graphData3 = {
    type: 'line',
    data: {
        labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
        datasets: [{
            label: 'Y_axis',
            data: y,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            zoom: {
                pan: {
                  enabled:true,
                },
                zoom: {
                 wheel:{
                    enabled: true,
                    //speed:0.1, speedup zooming or zoomout
                  }

                    
               }
            }
        }
    }
}
var myChart3 = new Chart(ctx3, graphData3 );  

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    // console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    // console.log("this is ",djangoData);
    const myarray=djangoData.split(",")
    // console.log(myarray[1])
    // console.log(myarray[2])
    // var v=myarray[3]
    var v= Math.floor((myarray[3]));
    // console.log(myarray[3])
    document.querySelector("#app3").innerText = v;
    var newGraphData3 = graphData3.data.datasets[0].data;
    var s=" "
    var newLevel3=graphData3.data.labels
    if (myarray[10]) {

    var timestamp = myarray[10];
    var date = new Date(timestamp*1000);
    var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    console.log(s)


        newLevel3.shift();
        newLevel3.push(s)
        
      } else {
        newLevel3.shift();
        newLevel3.push(s)
        //  block of code to be executed if the condition is false
      }
    newGraphData3.shift();
    newGraphData3.push(v);
    graphData3.data.datasets[0].data = newGraphData3;
    myChart3.update();

}

function ZoomChartIny(){
    myChart3.zoom(1.1)
 
}


function ZoomChartOuty(){
    myChart3.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomCharty(){
    myChart3.resetZoom();
}


function changeliney(){
    const updatetype = 'line'
    myChart3.config.type = updatetype
    myChart3.update();
};

function changebary(){
    const updatetype = "bar";
    myChart3.config.type = updatetype;
    myChart3.update();
}







function FFTy(){

    const newlabel = fftdata;
    const datanew=[1,2,4,4,5,4,3,3,4,3,4,50,90,30]
    
    myChart3.config.data.labels=newlabel
    myChart3.config.data.datasets[0].data = fftdata;
    myChart3.update();

}




function livey(){
    const updatetype = 'line'
    myChart3.config.type = updatetype
    myChart3.config.data.labels =["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
    myChart3.config.data.dataset[0].data =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    myChart3.update();


    

}






















const ctx4 = document.getElementById('myChart4').getContext('2d');

var graphData4 = {
    type: 'line',
    data: {
        labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
        datasets: [{
            label: 'Z_axis',
            data: z,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            zoom: {
                pan: {
                  enabled:true,
                },
                zoom: {
                 wheel:{
                    enabled: true,
                    //speed:0.1, speedup zooming or zoomout
                  }

                    
               }
            }
        }
    }
}
var myChart4 = new Chart(ctx4, graphData4);  

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    // console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    // console.log("this is ",djangoData);
    const myarray=djangoData.split(",")
    // console.log(myarray[1])
    // console.log(myarray[2])
    var v= Math.floor((myarray[4]));
    // var v=myarray[4]
    // console.log(myarray[4])
    document.querySelector("#app4").innerText = v;
    var newGraphData4 = graphData4.data.datasets[0].data;
    var s=" "
    var newLevel4=graphData4.data.labels
    if (myarray[10]) {

        var timestamp = myarray[10];
        var date = new Date(timestamp*1000);
        var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
        console.log(s)
    
    
            newLevel4.shift();
            newLevel4.push(s)
            
          } else {
            newLevel4.shift();
            newLevel4.push(s)
            //  block of code to be executed if the condition is false
          }
        newGraphData4.shift();
        newGraphData4.push(v);
        graphData4.data.datasets[0].data = newGraphData4;
        myChart4.update();
    
}
function ZoomChartInz(){
    myChart4.zoom(1.1)
 
}


function ZoomChartOutz(){
    myChart4.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartz(){
    myChart4.resetZoom();
}




function changelinez(){
    const updatetype = 'line'
    myChart4.config.type = updatetype
    myChart4.update();
};

function changebarz(){
    const updatetype = "bar";
    myChart4.config.type = updatetype;
    myChart4.update();
}

console.log("this is fft data type",fftdata)

function FFTz(){
    const fft1 = "Z_axis(FFT)";
    const newlabel = fftdata;
    const datanew=[1,2,4,4,5,4,3,3,4,3,4,50,90,30]
    
    myChart4.config.data.labels=newlabel
    myChart4.config.data.datasets[0].data = fftdata;
    myChart4.update();

}


function live(){
    const updatetype = 'line'
    myChart4.config.type = updatetype
    myChart4.config.data.labels =["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
    myChart4.config.data.datasets[0].data =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    myChart4.update();


    

}












const ctx5 = document.getElementById('myChart5').getContext('2d');

var graphData5 = {
    type: 'line',
    data: {
        labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
        datasets: [{
            label: 'Pressure (Pa)',
            data: press,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        plugins: {
            zoom: {
                pan: {
                  enabled:true,
                },
                zoom: {
                 wheel:{
                    enabled: true,
                    //speed:0.1, speedup zooming or zoomout
                  }

                    
               }
            }
        }
    }
}
var myChart5 = new Chart(ctx5, graphData5 );  

var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
ws.onmessage = function(e){
    var djangoData=JSON.parse(e.data);
    // console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    // console.log("this is ",djangoData);
    const myarray=djangoData.split(",")
    // console.log(myarray[1])
    // console.log(myarray[2])
    var v= Math.floor((myarray[6]));
    // var v=myarray[6]
    // console.log(myarray[3])
    document.querySelector("#app6").innerText = v;
    var newGraphData5 = graphData5.data.datasets[0].data;
    var s=" "
    var newLevel5=graphData5.data.labels
    if (myarray[10]) {

        var timestamp = myarray[10];
        var date = new Date(timestamp*1000);
        var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
        console.log(s)
    
    
            newLevel5.shift();
            newLevel5.push(s)
            
          } else {
            newLevel5.shift();
            newLevel5.push(s)
            //  block of code to be executed if the condition is false
          }
        newGraphData5.shift();
        newGraphData5.push(v);
        graphData5.data.datasets[0].data = newGraphData5;
        myChart5.update();
    
        
    }


    function ZoomChartInp(){
        myChart5.zoom(1.1)
     
    }
    
    
    function ZoomChartOutp(){
        myChart5.zoom(0.1)
        // myChart.resetZoom();
        // alert("Hello Zoomout"); 
    }
    
    
    function resetZoomChartp(){
        myChart5.resetZoom();
    }
    




    function changelinep(){
        const updatetype = 'line'
        myChart5.config.type = updatetype
        myChart5.update();
    };
    
    function changebarp(){
        const updatetype = "bar";
        myChart5.config.type = updatetype;
        myChart5.update();
    }


// var socket = new WebSocket("ws://127.0.0.1:8000/ws/graph4/")
// socket.onmessage = function(e){
//     var djangoData5=JSON.parse(e.data);
//     console.log(djangoData5);
//     document.querySelector("#app5").innerText = djangoData5.value;
//     console.log(djangoData5);
//     var newGraphData5 = graphData5.data.datasets[0].data;
//     newGraphData5.shift();
//     newGraphData5.push(djangoData5.value);
//     graphData5.data.datasets[0].data = newGraphData5;
//     myChart5.update();

// }
