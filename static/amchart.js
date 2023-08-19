
// google.charts.load('current', {'packages':['gauge']});

am4core.useTheme(am4themes_animated);
am4core.options.autoDispose = true;
am4core.disposeAllCharts();

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
  
  var score = Math.floor((myarray[0]));
  // document.querySelector(machine).innerText = smoke;
  // var noise = Math.floor((myarray[1]));
  // document.querySelector(machine1).innerText = noise;
  // var humadity = Math.floor((myarray[5]));
  // document.querySelector(machine2).innerText = humadity;
    


//   am4core.useTheme(am4themes_animated);
//   am4core.options.autoDispose = true;

  // Create chart
//   let root = am5.Root.new('chartdiv');

//   /* remove amchart logo */
  
//   root._logo.dispose();



  var chart = am4core.create(name+"guage", am4charts.GaugeChart);
  if(chart.logo) {
    chart.logo.disabled = true;
    chart.showOnInit = false;
    }
  // Create axis
  var axis = chart.xAxes.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  
  // Set inner radius
  chart.innerRadius = -50;
  
  
  
  
  
  
  
var s=95
  
  
  // Main label
  var label = chart.radarContainer.createChild(am4core.Label);
  label.isMeasured = false;
  label.fontSize = 40;
  label.x = am4core.percent(50);
  label.y = am4core.percent(50);
  label.horizontalCenter = "middle";
  label.verticalCenter = "bottom";
  label.text = s+"%";
  
  
  
  
  // Main label
  // var labela = chart.radarContainer.createChild(am4core.Label);
  // labela.isMeasured = false;
  // labela.fontSize = 30;
  // labela.x = am4core.percent(10);
  // labela.y = am4core.percent(10);
  // labela.horizontalCenter = "top";
  // labela.verticalCenter = "left";
  // labela.text = "good";
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Add ranges
  var range = axis.axisRanges.create();
  range.value = 0;
  range.endValue = 50;
  range.axisFill.fillOpacity = 1;
  range.axisFill.fill = am4core.color("#ff0000");
  range.axisFill.zIndex = 1;
  
  var range2 = axis.axisRanges.create();
  range2.value = 50;
  range2.endValue = 75;
  range2.axisFill.fillOpacity = 1;
  range2.axisFill.fill = am4core.color("#FFBF00");
  range2.axisFill.zIndex = 1;
  
  var range3 = axis.axisRanges.create();
  range3.value = 75;
  range3.endValue = 100;
  range3.axisFill.fillOpacity = 1;
  range3.axisFill.fill = am4core.color("#1AA7EC");
  range3.axisFill.zIndex = 1
  range3.innerRadius=-85
  // innerRadius: -45;
  
  // Add hand
  var hand = chart.hands.push(new am4charts.ClockHand());
  hand.value = 95;
  hand.pin.disabled = true;
  hand.fill = am4core.color("");
  hand.stroke = am4core.color("#2D93AD");
  hand.innerRadius = am4core.percent(65);
  hand.radius = am4core.percent(100);
  hand.startWidth = 15;
  
  
  
  
  
  // Animate
  setInterval(function() {
  
    // var value = Math.round(Math.random() * 100)
    hand.showValue(95, 1000, am4core.ease.cubicOut);
    label.text = s + "%";
  
  },);



}
}