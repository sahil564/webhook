const ctx4 = document.getElementById('myChart2').getContext('2d');

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
    myChart4.config.data.datasets[0].data =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    myChart4.update();


    

}
