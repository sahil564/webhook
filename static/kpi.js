
// const groupname=JSON.parse(document.getElementById("group-name").textContent)
// console.log("group Name....",groupname)

const ctx1 = document.getElementById('myChart1').getContext('2d');

var graphData1 = {
    type: 'pie',
    data: {
        labels: ["January", "February","March","April","May", "June", "July", "August", "September","October"," November","December"],
        datasets: [{
            label: 'Data(GB)',
            data: [10,6,13,14,35,36,27,38,29,90,26,34],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(52, 152, 219 , 1)',
                'rgba(93, 173, 226 , 1)',
                'rgba(133, 193, 233 , 1)',
                'rgba(169, 204, 227  , 1)',
                'rgba(33, 97, 140 , 1)',
                'rgba(27, 79, 114, 1)',
                'rgba(93, 173, 226, 1)',
                'rgba(133, 193, 233 , 1)',
                'rgba(33, 97, 140, 1)',
                'rgba(40, 116, 166 , 1)',
                'rgba(52, 73, 94, 1)',
                'rgba(27, 79, 114, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
      
            ],

        },
    ]
    },
    options: {

        responsive: false,

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
//     var v=myarray[1]
//     // console.log(myarray[3])
//     var s=" "
//     var newLevel1=graphData1.data.labels
//     if (myarray[5]) {

//     var timestamp = myarray[5];
//     var date = new Date(timestamp*1000);
//     var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
//     console.log(s)


//         newLevel1.shift();
//         newLevel1.push(s)
        
//       } else {
//         newLevel1.shift();
//         newLevel1.push(s)
//         //  block of code to be executed if the condition is false
//       }
//     document.querySelector("#app1").innerText = v;
//     var newGraphData1 = graphData1.data.datasets[0].data;
//     newGraphData1.shift();
//     newGraphData1.push(v);
//     graphData1.data.datasets[0].data = newGraphData1;
//     myChart1.update();

    
// }



const ctx2 = document.getElementById('myChart2').getContext('2d');

var graphData2 = {
    type: 'pie',
    data: {
        labels: ["January", "February","March","April","May", "June", "July", "August", "September","October"," November","December"],
        datasets: [{
            label: 'DATA(GB)',
            data: [8,10,7,12,9,8,54,13,3,03,14,59],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(205, 92, 92 , 1)',
                'rgba(240, 128, 128 , 1)',
                'rgba(250, 128, 114 , 1)',
                'rgba(233, 150, 122 , 1)',
                'rgba(255, 160, 122 , 1)',
                'rgba(110, 44, 0, 1)',
                'rgba(211, 84, 0, 1)',
                'rgba(220, 118, 51  , 1)',
                'rgba(229, 152, 102 ,1)',
                'rgba(237, 187, 153, 1)',
                'rgba(250, 215, 160, 1)',
                'rgba(242, 215, 213, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
      
            ],

        },


    ]
    },
    options: {
        responsive: false,

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
//     var v=myarray[1]
//     // console.log(myarray[3])
//     var s=" "
//     var newLevel2=graphData2.data.labels
//     if (myarray[5]) {

//     var timestamp = myarray[5];
//     var date = new Date(timestamp*1000);
//     var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
//     console.log(s)


//         newLevel2.shift();
//         newLevel2.push(s)
        
//       } else {
//         newLevel2.shift();
//         newLevel2.push(s)
//         //  block of code to be executed if the condition is false
//       }
//     document.querySelector("#app2").innerText = v;
//     var newGraphData2 = graphData2.data.datasets[0].data;
//     newGraphData2.shift();
//     newGraphData2.push(v);
//     graphData2.data.datasets[0].data = newGraphData2;
//     myChart2.update();

    
// }










const ctx3 = document.getElementById('myChart3').getContext('2d');

var graphData3 = {
    type: 'bar',
    data: {
        labels: ["January", "February","March","April","May", "June", "July", "August", "September","October"," November","December"],
        datasets: [{
            label: 'faults per month',
            data: [23,8,23,23,23,12,24,23,23,4,24,23],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(205, 92, 92 , 1)',
                'rgba(240, 128, 128 , 1)',
                'rgba(250, 128, 114 , 1)',
                'rgba(233, 150, 122 , 1)',
                'rgba(255, 160, 122 , 1)',
                'rgba(110, 44, 0, 1)',
                'rgba(211, 84, 0, 1)',
                'rgba(220, 118, 51  , 1)',
                'rgba(229, 152, 102 ,1)',
                'rgba(237, 187, 153, 1)',
                'rgba(250, 215, 160, 1)',
                'rgba(242, 215, 213, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 0)',
      
            ],

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
            legend:{
                labels:{
                    boxWidth:0,
                    fontColor: "blue",
                    fontSize: 18
                }
            },


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






















const ctx4 = document.getElementById('myChart4').getContext('2d');

var graphData4 = {
    type: 'bar',
    data: {
        labels: ["January", "February","March","April","May", "June", "July", "August", "September","October"," November","December"],
        datasets: [{
            label: 'faults per month',
            data: [23,6,23,23,23,12,23,23,23,10,23,23],
            options: {

                responsive: false
            },
 
            backgroundColor: [
                'rgba(52, 152, 219 , 1)',
                'rgba(93, 173, 226 , 1)',
                'rgba(133, 193, 233 , 1)',
                'rgba(169, 204, 227  , 1)',
                'rgba(33, 97, 140 , 1)',
                'rgba(27, 79, 114, 1)',
                'rgba(93, 173, 226, 1)',
                'rgba(133, 193, 233 , 1)',
                'rgba(33, 97, 140, 1)',
                'rgba(40, 116, 166 , 1)',
                'rgba(52, 73, 94, 1)',
                'rgba(27, 79, 114, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
      
            ],

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
            legend:{
                labels:{
                    boxWidth:0,
                    fontColor: "blue",
                    fontSize: 18
                }
            },


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