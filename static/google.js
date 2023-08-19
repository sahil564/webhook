
google.charts.load('current', {'packages':['gauge']});



const machine_name=JSON.parse(document.getElementById("machine_name").textContent)
console.log("group Name....",machine_name)



all=machine_name
for (const name of all){
      console.log(name);
    
var ws = new WebSocket('ws://'+window.location.host + `/ws/jwc/${name}/`)

    var machine = `#${name}1`
    var machine1 = `#${name}2`
    var machine2 = `#${name}3`
    console.log(machine,"hash tag")
    console.log(machine1,"hash tag")
    console.log(machine2,"hash tag")
ws.onmessage = function(e){
  var djangoData=JSON.parse(e.data);
  console.log("this is pred websocket",djangoData)
  const myarray=djangoData.split(",")
  console.log(myarray[0],machine)
  console.log(myarray[0])
  console.log(myarray[13])
  
  var smoke = Math.floor((myarray[0]));
  // document.querySelector(machine).innerText = smoke;
  // var noise = Math.floor((myarray[1]));
  // document.querySelector(machine1).innerText = noise;
  // var humadity = Math.floor((myarray[5]));
  // document.querySelector(machine2).innerText = humadity;
    






google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Score', smoke ],
  ]);

  var options = {
    width: 400, height: 320,
    redFrom: 0, redTo: 50,
    yellowFrom:50, yellowTo:75,
    greenFrom:75,greenTo:100,
    minorTicks: 5,
  };

  var chart = new google.visualization.Gauge(document.getElementById(name+"guage"));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, myarray[0]);
    chart.draw(data, options);
  }, 450);
}
}
}

























// names = ["anna", "beth", "chris", "daniel", "ethan"]
// names = machine_name



// li=[]



// function rollCall(name, index) {
//     id = "machine"+`${index + 1}`
//     console.log(id,`Is the number ${index + 1} student - ${name} present? Yes!`)
//     const input = [{ "key": "foo", "val": 3 }, { "key": "bar", "val": 10 }]

//     var ws = new WebSocket('ws://'+window.location.host + `/ws/jwc/${name}/`)
//     // console.log(ws)
//     // var ws = new WebSocket('ws://'+window.location.host + `/ws/jwc/' + groupname + '/`)

//     var machine = `#${name}1`
//     var machine1 = `#${name}2`
//     var machine2 = `#${name}3`
//     console.log(machine,"hash tag")
//     console.log(machine1,"hash tag")
//     console.log(machine2,"hash tag")
// ws.onmessage = function(e){
//   var djangoData=JSON.parse(e.data);
//   console.log("this is pred websocket",djangoData)
//   const myarray=djangoData.split(",")
//   console.log(myarray[0],machine)
//   console.log(myarray[0])
//   console.log(myarray[13])
//   var smoke = Math.floor((myarray[9]));
//   document.querySelector(machine).innerText = smoke;
//   var noise = Math.floor((myarray[1]));
//   document.querySelector(machine1).innerText = noise;
//   var humadity = Math.floor((myarray[5]));
//   document.querySelector(machine2).innerText = humadity;
//   function rand() {
//     return Math.floor(Math.random() * (100- 0) ) + 0;
//     }
 



// function rand() {
//     return Math.floor(Math.random() * (100- 0) ) + 0;
//     }



// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//     ['Memory', 0],
//   ]);

//   var options = {
//     width: 400, height: 320,
//     redFrom: 0, redTo: 50,
//     yellowFrom:50, yellowTo:75,
//     greenFrom:75,greenTo:100,
//     minorTicks: 3
//   };

//   var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

//   chart.draw(data, options);

//   setInterval(function() {
//     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 500);
// }





// }}
// names.forEach((name, index) => rollCall(name, index));






// google.charts.load('current', {'packages':['gauge']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//     ['Memory', 0],
//   ]);

//   var options = {
//     width: 400, height: 320,
//     redFrom: 0, redTo: 50,
//     yellowFrom:50, yellowTo:75,
//     greenFrom:75,greenTo:100,
//     minorTicks: 3
//   };

//   var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

//   chart.draw(data, options);

//   setInterval(function() {
//     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 500);
// }



// for (let i = 0; i < 5; i++) {

// console.log(`${i}machine`)


// google.charts.load('current', {'packages':['gauge']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Label', 'Value'],
//     ['Memory', 0],
//   ]);

//   var options = {
//     width: 400, height: 320,
//     redFrom: 0, redTo: 50,
//     yellowFrom:50, yellowTo:75,
//     greenFrom:75,greenTo:100,
//     minorTicks: 3
//   };

//   var chart = new google.visualization.Gauge(document.getElementById(`${i}machine`));

//   chart.draw(data, options);

//   setInterval(function() {
//     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//     chart.draw(data, options);
//   }, 500);
// }
//   }



// let colors = ['red', 'green', 'blue'];
// for (const color of colors){
//       console.log(color);
// }