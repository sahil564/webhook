const groupname=JSON.parse(document.getElementById("group-name").textContent)


const pred=JSON.parse(document.getElementById("pred").textContent)
const low=JSON.parse(document.getElementById("low").textContent)
const upp=JSON.parse(document.getElementById("upp").textContent)
const predn=JSON.parse(document.getElementById("predn").textContent)
const lown=JSON.parse(document.getElementById("lown").textContent)
const uppn=JSON.parse(document.getElementById("uppn").textContent)
const predx=JSON.parse(document.getElementById("predx").textContent)
const lowx=JSON.parse(document.getElementById("lowx").textContent)
const uppx=JSON.parse(document.getElementById("uppx").textContent)
const predy=JSON.parse(document.getElementById("predy").textContent)
const lowy=JSON.parse(document.getElementById("lowy").textContent)
const uppy=JSON.parse(document.getElementById("uppy").textContent)
const predz=JSON.parse(document.getElementById("predz").textContent)
const lowz=JSON.parse(document.getElementById("lowz").textContent)
const uppz=JSON.parse(document.getElementById("uppz").textContent)
const predp=JSON.parse(document.getElementById("predp").textContent)
const lowp=JSON.parse(document.getElementById("lowp").textContent)
const uppp=JSON.parse(document.getElementById("uppp").textContent)
console.log("group Name....",groupname)
console.log("data....",pred)















const ctx1 = document.getElementById('myChart1').getContext('2d');

var graphData1 = {
    type: 'line',
    data: {
        labels: pred,
        datasets: [{
            label: 'upper value',
            data: upp,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
        {
            label: 'predicted value',
            data: pred,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4,
        },
        {
            label: 'Actual values',
            data: [34,35,34,35,34,35,36,34,35,34,34,36,34,35,36,35,34,35,35,34,35,35,34,35,35,35,35,36,36,35,35,35,36,36,37,37,32,35,35,32,35],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(0, 0, 255, 1)',

            ],
            borderColor: [
                'rgba(0, 0, 255, 1)',
      
            ],
            tension:0.4,
        },
        {
            label: 'lower value',
            data: low,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',

            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
      
            ],
             
            tension:0.4,
            fill:1,
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
                  threshold:10,
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
    console.log(djangoData);
    // console.log("message recieved from server.....",e)
    const data = JSON.parse(e.data)
    var djangoData=JSON.parse(e.data);
    // console.log("this is ",djangoData);
    const myarray=djangoData.split(",")
    // console.log(myarray[1])
    // console.log(myarray[2])
    var v=myarray[0]
    // console.log(myarray[3])
    // var s=" "
    // var newLevel1=graphData1.data.labels
    // if (myarray[5]) {

    // var timestamp = myarray[5];
    // var date = new Date(timestamp*1000);
    // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    // console.log(s)


    //     newLevel1.shift();
    //     newLevel1.push(s)
        
    //   } else {
    //     newLevel1.shift();
    //     newLevel1.push(s)
    //     //  block of code to be executed if the condition is false
    //   }

    var newGraphData1 = graphData1.data.datasets[2].data;
    // newGraphData1.shift();
    newGraphData1.push(v);
    graphData1.data.datasets[2].data = newGraphData1;
    myChart1.update();

    
}
function ZoomChartIn(){
    myChart1.zoom(1.1)
 
}


function ZoomChartOut(){
    myChart1.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChart(){
    myChart1.resetZoom();
}

















const ctx2 = document.getElementById('myChart2').getContext('2d');

var graphData2 = {
    type: 'line',
    data: {
        labels:predn,
        datasets: [{
            label: 'upper value',
            data: uppn,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },

        {
            label: 'predicted value',
            data: predn,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4,
        },
        {
            label: 'Actual values',
            data: [],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(0, 255, 0, 1)',

            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
      
            ],
            tension:0.4,
        },
        {
            label: 'lower value',
            data: lown,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
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
    var v=myarray[1]
    // console.log(myarray[3])
    // var s=" "
    // var newLevel2=graphData2.data.labels
    // if (myarray[5]) {

    // var timestamp = myarray[5];
    // var date = new Date(timestamp*1000);
    // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    // console.log(s)


    //     newLevel2.shift();
    //     newLevel2.push(s)
        
    //   } else {
    //     newLevel2.shift();
    //     newLevel2.push(s)
    //     //  block of code to be executed if the condition is false
    //   }

    var newGraphData2 = graphData2.data.datasets[2].data;
    // newGraphData2.shift();
    newGraphData2.push(v);
    graphData2.data.datasets[2].data = newGraphData2;
    myChart2.update();

    
}

function ZoomChartInn(){
    myChart2.zoom(1.1)
 
}


function ZoomChartOutn(){
    myChart2.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartn(){
    myChart2.resetZoom();
}























const ctx3 = document.getElementById('myChart3').getContext('2d');

var graphData3 = {
    type: 'line',
    data: {
        labels: predx,
        datasets: [{
            label: 'upper value',
            data: uppx,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
        {
            label: 'predicted value',
            data:predx,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4,
            },
            {
                label: 'actual values',
                data:[],
                options: {
    
                    responsive: false
                },
     
                backgroundColor: [
                    'rgba(0, 255, 0, 1)',
    
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
          
                ],
                tension:0.4,
                },
        {
            label: 'lower value',
            data: lowx,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
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
    var v=myarray[2]
    // console.log(myarray[3])
    // var s=" "
    // var newLevel3=graphData3.data.labels
    // if (myarray[5]) {

    // var timestamp = myarray[5];
    // var date = new Date(timestamp*1000);
    // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    // console.log(s)


    //     newLevel3.shift();
    //     newLevel3.push(s)
        
    //   } else {
    //     newLevel3.shift();
    //     newLevel3.push(s)
    //     //  block of code to be executed if the condition is false
    //   }
 
    var newGraphData3 = graphData3.data.datasets[2].data;
    // newGraphData3.shift();
    newGraphData3.push(v);
    graphData3.data.datasets[2].data = newGraphData3;
    myChart3.update();

    
}
function ZoomChartInx(){
    myChart3.zoom(1.1)
 
}


function ZoomChartOutx(){
    myChart3.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartx(){
    myChart3.resetZoom();
}













const ctx4 = document.getElementById('myChart4').getContext('2d');

var graphData4 = {
    type: 'line',
    data: {
        labels:predy,
        datasets: [{
            label: 'upper value',
            data: uppy,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
        {
            label: 'predicted value',
            data:predy,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4,
        },
        {
            label: 'actual values',
            data:[],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(0, 255, 0, 1)',

            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
      
            ],
            tension:0.4,
        },
        {
            label: 'lower value',
            data: lowy,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
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
// var myChart4 = new Chart(ctx4, graphData4 );  

// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     // console.log(djangoData);
//     // console.log("message recieved from server.....",e)
//     const data = JSON.parse(e.data)
//     var djangoData=JSON.parse(e.data);
//     // console.log("this is ",djangoData);
//     const myarray=djangoData.split(",")
//     // console.log(myarray[1])
//     // console.log(myarray[2])
//     var v=myarray[3]
//     // console.log(myarray[3])
//     // var s=" "
//     // var newLevel4=graphData4.data.labels
//     // if (myarray[5]) {

//     // var timestamp = myarray[5];
//     // var date = new Date(timestamp*1000);
//     // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
//     // console.log(s)


//     //     newLevel4.shift();
//     //     newLevel4.push(s)
        
//     //   } else {
//     //     newLevel4.shift();
//     //     newLevel4.push(s)
//     //     //  block of code to be executed if the condition is false
//     //   }

//     var newGraphData4 = graphData4.data.datasets[2].data;
//     newGraphData4.shift();
//     newGraphData4.push(v);
//     graphData4.data.datasets[2].data = newGraphData4;
//     myChart4.update();

    
// }

// function ZoomChartIny(){
//     myChart4.zoom(1.1)
 
// }


// function ZoomChartOuty(){
//     myChart4.zoom(0.1)
//     // myChart.resetZoom();
//     // alert("Hello Zoomout"); 
// }


// function resetZoomCharty(){
//     myChart4.resetZoom();
// }




var myChart4 = new Chart(ctx4, graphData4 );  

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
    var v=myarray[3]
    // console.log(myarray[3])
    // var s=" "
    // var newLevel3=graphData3.data.labels
    // if (myarray[5]) {

    // var timestamp = myarray[5];
    // var date = new Date(timestamp*1000);
    // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    // console.log(s)


    //     newLevel3.shift();
    //     newLevel3.push(s)
        
    //   } else {
    //     newLevel3.shift();
    //     newLevel3.push(s)
    //     //  block of code to be executed if the condition is false
    //   }
 
    var newGraphData4 = graphData4.data.datasets[2].data;
    // newGraphData3.shift();
    newGraphData4.push(v);
    graphData4.data.datasets[2].data = newGraphData4;
    myChart4.update();

    
}
function ZoomChartInx(){
    myChart4.zoom(1.1)
 
}


function ZoomChartOutx(){
    myChart4.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartx(){
    myChart4.resetZoom();
}





































const ctx5 = document.getElementById('myChart5').getContext('2d');

var graphData5 = {
    type: 'line',
    data: {
        labels:predz,
        datasets: [{
            label: 'upper value',
            data: uppz,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
        {
            label: 'predicted value',
            data: predz,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4,
     
        },
        {
            label: 'actual values',
            data: [],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(0, 255, 0, 1)',

            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
      
            ],
            tension:0.4,
     
        },
        {
            label: 'lower value',
            data: lowz,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
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
    var v=myarray[4]
    // // console.log(myarray[3])
    // var s=" "
    // var newLevel5=graphData5.data.labels
    // if (myarray[5]) {

    // var timestamp = myarray[5];
    // var date = new Date(timestamp*1000);
    // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    // console.log(s)


    //     newLevel5.shift();
    //     newLevel5.push(s)
        
    //   } else {
    //     newLevel5.shift();
    //     newLevel5.push(s)
    //     //  block of code to be executed if the condition is false
    //   }
    var newGraphData5 = graphData5.data.datasets[2].data;
    // newGraphData5.shift();
    newGraphData5.push(v);
    graphData5.data.datasets[2].data = newGraphData5;
    myChart5.update();

    
}
function ZoomChartInz(){
    myChart5.zoom(1.1)
 
}


function ZoomChartOutz(){
    myChart5.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartz(){
    myChart5.resetZoom();
}













const ctx6 = document.getElementById('myChart6').getContext('2d');

var graphData6 = {
    type: 'line',
    data: {
        labels:predp,
        datasets: [{
            label: 'upper value',
            data: uppp,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
        {
            label: 'predicted value',
            data: predp,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4,
     
        },
        {
            label: 'actual values',
            data: [],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(0, 255, 0, 1)',

            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
      
            ],
            tension:0.4,
     
        },
        {
            label: 'lower value',
            data: lowp,
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255,248,220, 0.2)',
            ],
            borderColor: [
                'rgba(0, 0, 255, 0)',
      
            ],
           
            tension:0.4,
            fill:1
        },
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
var myChart6 = new Chart(ctx6, graphData6 );  

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
    var v=myarray[6]
    // console.log(myarray[3])
    // var s=" "
    // var newLevel6=graphData6.data.labels
    // if (myarray[5]) {

    // var timestamp = myarray[5];
    // var date = new Date(timestamp*1000);
    // var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    // console.log(s)


    //     newLevel6.shift();
    //     newLevel6.push(s)
        
    //   } else {
    //     newLevel6.shift();
    //     newLevel6.push(s)
    //     //  block of code to be executed if the condition is false
    //   }
    var newGraphData6 = graphData6.data.datasets[2].data;
    // newGraphData6.shift();
    newGraphData6.push(v);
    graphData6.data.datasets[2].data = newGraphData6;
    myChart6.update();

    
}

function ZoomChartInp(){
    myChart6.zoom(1.1)
 
}


function ZoomChartOutp(){
    myChart6.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomChartp(){
    myChart6.resetZoom();
}


