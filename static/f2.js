
const groupname=JSON.parse(document.getElementById("group-name").textContent)
console.log("group Name....",groupname)

const ctx1 = document.getElementById('myChart1').getContext('2d');

var graphData1 = {
    type: 'line',
    data: {
        labels: ['26:04:23','27:04:23','28:04:23','29:04:23','30:04:23','01:05:23', '02:05:23', '03:05:23', '04:05:23', '06:05:23','07:05:23','08:05:23','09:05:23','10:05:23', '11:05:23', '12:05:23', '13:05:23', '14:05:23', '15:06:23', '16:05:23','17:01:23','18:05:23','19:05:23','20:05:23','21:05:23','22:05:23','23:05:23','24:05:23','25:05:23','26:05:23'],
        datasets: [{
            label: 'upper value',
            data: [36,36,33,34,35,36,37,38,39,30,31,32,33,34,35,36,37,38,39,31,32,33,34,35,36,37,38,39,30,31],
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
            data: [20,22,21,21,22,23,24,24,27,20,21,20,21,20,21,21,20,23,21,20,21,20,21,21,20,23,21,21,20,23],
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
            fill:1
        },
        {
            label: 'lower value',
            data: [16,16,13,14,15,16,17,18,19,10,11,12,12,18,18,18,19,10,11,16,18,12,14,15,16,17,12,15,15,16],
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
    var v=myarray[1]
    // console.log(myarray[3])
    var s=" "
    var newLevel1=graphData1.data.labels
    if (myarray[5]) {

    var timestamp = myarray[5];
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
    document.querySelector("#app1").innerText = v;
    var newGraphData1 = graphData1.data.datasets[0].data;
    newGraphData1.shift();
    newGraphData1.push(v);
    graphData1.data.datasets[0].data = newGraphData1;
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
        labels: ['26:04:23','27:04:23','28:04:23','29:04:23','30:04:23','01:05:23', '02:05:23', '03:05:23', '04:05:23', '06:05:23','07:05:23','08:05:23','09:05:23','10:05:23', '11:05:23', '12:05:23', '13:05:23', '14:05:23', '15:06:23', '16:05:23','17:01:23','18:05:23','19:05:23','20:05:23','21:05:23','22:05:23','23:05:23','24:05:23','25:05:23','26:05:23'],
        datasets: [{
            label: 'upper value',
            data: [2300,2306,2342,2330,2335,2376,2437,2318,2319,2301,2311,2312,2313,2314,2325,2326,2327,2338,2339,2331,2312,2333,2334,2335,2336,2317,2308,2309,2330,2311],
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
            data: [2298,2300,2300,2295,2298,2299,2370,2300,2300,2297,2291,2303,2307,2309,2311,2301,2300,2305,2298,2300,2300,2295,2298,2299,2300,2300,2300,2297,2291,2303,],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255, 191, 0, 1)',
      
            ],
            tension:0.4
        },
        {
            label: 'lower value',
            data: [2280,2290,2280,2280,2280,2280,2280,2290,2290,2290,2279,2290,2294,2284,2285,2290,2280,2280,2270,2270,2291,2276,2295,2283,2292,2281,2290,2289,2281,2281],
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
    var s=" "
    var newLevel2=graphData2.data.labels
    if (myarray[5]) {

    var timestamp = myarray[5];
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
    document.querySelector("#app2").innerText = v;
    var newGraphData2 = graphData2.data.datasets[0].data;
    newGraphData2.shift();
    newGraphData2.push(v);
    graphData2.data.datasets[0].data = newGraphData2;
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
        labels: ['26:04:23','27:04:23','28:04:23','29:04:23','30:04:23','01:05:23', '02:05:23', '03:05:23', '04:05:23', '06:05:23','07:05:23','08:05:23','09:05:23','10:05:23', '11:05:23', '12:05:23', '13:05:23', '14:05:23', '15:06:23', '16:05:23','17:01:23','18:05:23','19:05:23','20:05:23','21:05:23','22:05:23','23:05:23','24:05:23','25:05:23','26:05:23'],
        datasets: [{
            label: 'upper value',
            data: [236,236,233,234,235,236,237,238,239,230,231,232,233,234,235,236,237,238,239,231,232,233,234,235,236,237,238,239,230,231],
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
            data: [220,222,221,221,222,223,224,224,227,220,221,220,221,220,221,221,220,223,221,220,212,220,221,221,220,223,221,221,220,223],
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
            label: 'lower value',
            data: [206,200,203,204,205,206,207,208,209,200,201,202,203,204,205,206,207,208,209,201,202,203,204,205,206,207,208,209,200,201],
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
    var v=myarray[1]
    // console.log(myarray[3])
    var s=" "
    var newLevel3=graphData3.data.labels
    if (myarray[5]) {

    var timestamp = myarray[5];
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
    document.querySelector("#app3").innerText = v;
    var newGraphData3 = graphData3.data.datasets[0].data;
    newGraphData3.shift();
    newGraphData3.push(v);
    graphData3.data.datasets[0].data = newGraphData3;
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
        labels: ['26:04:23','27:04:23','28:04:23','29:04:23','30:04:23','01:05:23', '02:05:23', '03:05:23', '04:05:23', '06:05:23','07:05:23','08:05:23','09:05:23','10:05:23', '11:05:23', '12:05:23', '13:05:23', '14:05:23', '15:06:23', '16:05:23','17:01:23','18:05:23','19:05:23','20:05:23','21:05:23','22:05:23','23:05:23','24:05:23','25:05:23','26:05:23'],
        datasets: [{
            label: 'upper value',
            data: [236,236,233,234,235,236,237,238,239,230,231,232,233,234,235,236,237,238,239,231,232,233,234,235,236,237,238,239,230,231],
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
            data: [220,222,221,221,222,223,224,224,227,220,221,220,221,220,221,221,220,223,221,220,212,220,221,221,220,223,221,221,220,223],
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
            label: 'lower value',
            data: [206,200,203,204,205,206,207,208,209,200,201,202,203,204,205,206,207,208,209,201,202,203,204,205,206,207,208,209,200,201],
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
    var v=myarray[1]
    // console.log(myarray[3])
    var s=" "
    var newLevel4=graphData4.data.labels
    if (myarray[5]) {

    var timestamp = myarray[5];
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
    document.querySelector("#app4").innerText = v;
    var newGraphData4 = graphData4.data.datasets[0].data;
    newGraphData4.shift();
    newGraphData4.push(v);
    graphData4.data.datasets[0].data = newGraphData4;
    myChart4.update();

    
}

function ZoomChartIny(){
    myChart4.zoom(1.1)
 
}


function ZoomChartOuty(){
    myChart4.zoom(0.1)
    // myChart.resetZoom();
    // alert("Hello Zoomout"); 
}


function resetZoomCharty(){
    myChart4.resetZoom();
}






















const ctx5 = document.getElementById('myChart5').getContext('2d');

var graphData5 = {
    type: 'line',
    data: {
        labels: ['26:04:23','27:04:23','28:04:23','29:04:23','30:04:23','01:05:23', '02:05:23', '03:05:23', '04:05:23', '06:05:23','07:05:23','08:05:23','09:05:23','10:05:23', '11:05:23', '12:05:23', '13:05:23', '14:05:23', '15:06:23', '16:05:23','17:01:23','18:05:23','19:05:23','20:05:23','21:05:23','22:05:23','23:05:23','24:05:23','25:05:23','26:05:23'],
        datasets: [{
            label: 'upper value',
            data: [236,236,233,234,235,236,237,238,239,230,231,232,233,234,235,236,237,238,239,231,232,233,234,235,236,237,238,239,230,231],
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
            data: [220,222,221,221,222,223,224,224,227,220,221,220,221,220,221,221,220,223,221,220,212,220,221,221,220,223,221,221,220,223],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255,255,0, 1)',
      
            ],
            tension:0.4
        },
        {
            label: 'lower value',
            data: [206,200,203,204,205,206,207,208,209,200,201,202,203,204,205,206,207,208,209,201,202,203,204,205,206,207,208,209,200,201],
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
    var v=myarray[1]
    // console.log(myarray[3])
    var s=" "
    var newLevel5=graphData5.data.labels
    if (myarray[5]) {

    var timestamp = myarray[5];
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
    document.querySelector("#app5").innerText = v;
    var newGraphData5 = graphData5.data.datasets[0].data;
    newGraphData5.shift();
    newGraphData5.push(v);
    graphData5.data.datasets[0].data = newGraphData5;
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
        labels: ['26:04:23','27:04:23','28:04:23','29:04:23','30:04:23','01:05:23', '02:05:23', '03:05:23', '04:05:23', '06:05:23','07:05:23','08:05:23','09:05:23','10:05:23', '11:05:23', '12:05:23', '13:05:23', '14:05:23', '15:06:23', '16:05:23','17:01:23','18:05:23','19:05:23','20:05:23','21:05:23','22:05:23','23:05:23','24:05:23','25:05:23','26:05:23'],
        datasets: [{
            label: 'upper value',
            data: [236,236,233,234,235,236,237,238,239,230,231,232,233,234,235,236,237,238,239,231,232,233,234,235,236,237,238,239,230,231],
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
            data: [220,222,221,221,222,223,224,224,227,220,221,220,221,220,221,221,220,223,221,220,212,220,221,221,220,223,221,221,220,223],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(255, 191, 0, 1)',

            ],
            borderColor: [
                'rgba(255,255,0, 1)',
      
            ],
            tension:0.4
        },
        {
            label: 'lower value',
            data: [206,200,203,204,205,206,207,208,209,200,201,202,203,204,205,206,207,208,209,201,202,203,204,205,206,207,208,209,200,201],
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
    var v=myarray[1]
    // console.log(myarray[3])
    var s=" "
    var newLevel6=graphData6.data.labels
    if (myarray[5]) {

    var timestamp = myarray[5];
    var date = new Date(timestamp*1000);
    var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
    console.log(s)


        newLevel6.shift();
        newLevel6.push(s)
        
      } else {
        newLevel6.shift();
        newLevel6.push(s)
        //  block of code to be executed if the condition is false
      }
    document.querySelector("#app6").innerText = v;
    var newGraphData6 = graphData6.data.datasets[0].data;
    newGraphData6.shift();
    newGraphData6.push(v);
    graphData6.data.datasets[0].data = newGraphData6;
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