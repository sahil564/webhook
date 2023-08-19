
// const groupname=JSON.parse(document.getElementById("group-name").textContent)
// console.log("group Name....",groupname)

// // const fftdata=JSON.parse(document.getElementById("fft").textContent)

// // console.log("this is fft data",fftdata)

// const temp=JSON.parse(document.getElementById("temp").textContent)






// const ctx = document.getElementById('myChart').getContext('2d');

// var graphData = {
//     type: 'line',
//     data: {
//         labels: ["0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0","0:0:0"],
//         datasets: [{
//             label: 'Temperature',
//             data:temp,
//             options: {

//                 responsive: false
//             },
 
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.9)',
//                 'rgba(54, 162, 235, 0.9)',
//                 'rgba(255, 206, 86, 0.9)',
//                 'rgba(75, 192, 192, 0.9)',
//                 'rgba(153, 102, 255, 0.9)',
//                 'rgba(255, 159, 64, 0.9)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
      
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         },
//         plugins: {
//             zoom: {
//                 pan: {
//                   enabled:true,
//                 },
//                 zoom: {
//                  wheel:{
//                     enabled: true,
//                     //speed:0.1, speedup zooming or zoomout
//                   }

                    
//                }
//             }
//         }
//     }
// }
// var myChart = new Chart(ctx, graphData );  

// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     // console.log(djangoData);
//     // console.log("message recieved from server.....",e)
//     const data = JSON.parse(e.data)
//     var djangoData=JSON.parse(e.data);
//     const myarray=djangoData.split(",")
//     // console.log("first",myarray[0])
//     // console.log("second",myarray[1])
//     // console.log("third",myarray[2])
//     // console.log("forth",myarray[3])
//     // console.log("fifth",myarray[4])
//     // console.log("six",myarray[5])
//     // console.log("seven",myarray[6])

//     var v=myarray[0]
//     var s=" "
//     // console.log(t)
    
//     // console.log("value before change",v)
//     var intvalue = Math.floor((myarray[0]));
//     console.log("After change",intvalue)
//     document.querySelector("#app").innerText = intvalue;
//     var newLevel=graphData.data.labels
//     // console.log(newLevel)
//     var newGraphData = graphData.data.datasets[0].data;
//     // console.log(newGraphData)
//     // newLevel.shift();
//     // newLevel.push(s)
//     // function yourFunction(){
//     //     // do whatever you like here
//     //     newLevel.shift();
//     //     newLevel.push(myarray[5])
    
//     //     setTimeout(yourFunction, 5000);
//     // }
    
//     // yourFunction();
//     var s=" "
//     var newLevel=graphData.data.labels
//     if (myarray[10]) {

//     var timestamp = myarray[10];
//     var date = new Date(timestamp*1000);
//     var s =new Date(date).toLocaleTimeString(undefined,{timeZone:"Asia/Kolkata"})
//     console.log(s)


//         newLevel.shift();
//         newLevel.push(s)
        
//       } else {
//         newLevel.shift();
//         newLevel.push(s)
//         //  block of code to be executed if the condition is false
//       }
//     newGraphData.shift();
//     newGraphData.push(v);
//     graphData.data.datasets[0].data = newGraphData;
//     myChart.update();

// }

// function ZoomChartIn(){
//     myChart.zoom(1.1)
 
// }


// function ZoomChartOut(){
//     myChart.zoom(0.1)
//     // myChart.resetZoom();
//     // alert("Hello Zoomout"); 
// }


// function resetZoomChart(){
//     myChart.resetZoom();
// }



// function changelinet(){
//     const updatetype = 'line'
//     myChart.config.type = updatetype
//     myChart.update();
// };

// function changebart(){
//     const updatetype = "bar";
//     myChart.config.type = updatetype;
//     myChart.update();
// }








// const groupname=JSON.parse(document.getElementById("group-name").textContent)
// console.log("group Name....",groupname)

const groupname="TVS"
// const fftdata=JSON.parse(document.getElementById("fft").textContent)

// console.log("this is fft data",fftdata)

// const temp=JSON.parse(document.getElementById("temp").textContent)

// console.log("this is fft data",temp)
const temp=JSON.parse(document.getElementById("temp").textContent)

console.log("this is noise data",temp)

const ctx1 = document.getElementById('myChart1').getContext('2d');

var graphData1 = {
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


