
const machine_name=JSON.parse(document.getElementById("machine_name").textContent)
console.log("group Name....",machine_name)

// names = ["anna", "beth", "chris", "daniel", "ethan"]
names = machine_name



li=[]



function rollCall(name, index) {
    id = "machine"+`${index + 1}`
    console.log(id,`Is the number ${index + 1} student - ${name} present? Yes!`)
    const input = [{ "key": "foo", "val": 3 }, { "key": "bar", "val": 10 }]

    var ws = new WebSocket('ws://'+window.location.host + `/ws/jwc/${name}/`)
    // console.log(ws)
    // var ws = new WebSocket('ws://'+window.location.host + `/ws/jwc/' + groupname + '/`)

    var machine = `${name}`
ws.onmessage = function(e){
  var djangoData=JSON.parse(e.data);
  console.log("this is pred websocket",djangoData)
  const myarray=djangoData.split(",")
  console.log(myarray[0],machine)
  // let djangoData=JSON.parse(e.data);
  // console.log("this is websocket values for guage chart",djangoData)
  li.push();
  console.log(id.length)
  // console.log("this is last elements",a.slice(-1).pop())
  // console.log("this is last",a)
// console.log("this is websocket values for guage chart",ws)
// console.log("this is websocket values for guage chart",machine)



// ws.onmessage = function(e){
//   var djangoData=JSON.parse(e.data);
//   console.log("this is pred websocket",djangoData)
//   const myarray=djangoData.split(",")
//   console.log(myarray[0])
//     // let djangoData=JSON.parse(e.data);
//     // console.log("this is websocket values for guage chart",djangoData)
//     a.push(myarray[0]);
//     console.log("this is last elements",a.slice(-1).pop())
//     console.log("this is last",a)



window.feed = function(callback) {var tick = {};
  // tick.plot0 = Math.ceil(0 + (Math.random() * 100));
  tick.plot0 = Math.ceil(0 + myarray[0]);
  callback(JSON.stringify(tick));
};
};




 datasetguage = {
  type: "gauge",
  globals: {
    fontSize: 25
  },
  plotarea: {
    marginTop: 130
  },

  plot: {
    size: '100%',
    valueBox: {
      placement: 'center',
      text: '%v', //default
      fontSize: 35,
      rules: [{
          rule: '%v >= 85',
          text: '%v<br>EXCELLENT'
        },
        {
          rule: '%v <85  && %v > 65',
          text: '%v<br>Good'
        },
        {
          rule: '%v < 65 && %v > 50',
          text: '%v<br>Fair'
        },
        {
          rule: '%v <  50',
          text: '%v<br>Bad'
        }
      ]
    }
  },
  tooltip: {
    borderRadius: 5
  },
  scaleR: {
    aperture: 180,
    minValue: 0,
    maxValue: 100,
    step: 10,
    center: {
      visible: false
    },
    tick: {
      visible: false
    },
    item: {
      offsetR: 0,
      rules: [{
        rule: '%i == 9',
        offsetX: 15
      }]
    },
    labels: ['0'],
    ring: {
      size: 50,
      rules: [{
          rule: '%v <= 50',
          backgroundColor: '#E53935'
        },
        {
          rule: '%v = 50',
          backgroundColor: '#ffffff'
        },
        {
          rule: '%v > 50 && %v < 65',
          backgroundColor: '#EF5350'
        },
        {
          rule: '%v >= 65 && %v < 85',
          backgroundColor: '#FFA726'
        },
        {
          rule: '%v >= 85',
          backgroundColor: '#29B6F6'
        }
      ]
    }
  },
  refresh: {
    type: "feed",
    transport: "js",
    url: "feed()",
    interval: 1500,
    resetTimeout: 1000
  },
  series: [{
    values: [0], // starting value
    backgroundColor: 'black',
    indicator: [10, 10, 10, 10, 0.75],
    animation: {
      effect: 2,
      method: 1,
      sequence: 4,
      speed: 900
    },
  }]
};
console.log(machine)
zingchart.render({
  id: machine,
  data: datasetguage,
  height: 500,
  width: '100%'
});
  ;}


names.forEach((name, index) => rollCall(name, index));




// var ws = new WebSocket('ws://'+window.location.host + '/ws/jwc/' + groupname + '/')
// ws.onmessage = function(e){
//     var djangoData=JSON.parse(e.data);
//     console.log("this is pred websocket",djangoData)
//     const myarray=djangoData.split(",")
//     console.log(myarray[12])


//     document.querySelector("#datalen").innerText = myarray[12];



    
// }

















//   window.feed = function(callback) {
//     var tick = {};
//     // tick.plot0 = Math.ceil(0 + (Math.random() * 100));
//     tick.plot0 = Math.ceil(0 + myarray[0]);
//     callback(JSON.stringify(tick));
//   };
   
//   var datasetguage = {
//     type: "gauge",
//     globals: {
//       fontSize: 25
//     },
//     plotarea: {
//       marginTop: 130
//     },

//     plot: {
//       size: '100%',
//       valueBox: {
//         placement: 'center',
//         text: '%v', //default
//         fontSize: 35,
//         rules: [{
//             rule: '%v >= 85',
//             text: '%v<br>EXCELLENT'
//           },
//           {
//             rule: '%v <85  && %v > 65',
//             text: '%v<br>Good'
//           },
//           {
//             rule: '%v < 65 && %v > 50',
//             text: '%v<br>Fair'
//           },
//           {
//             rule: '%v <  50',
//             text: '%v<br>Bad'
//           }
//         ]
//       }
//     },
//     tooltip: {
//       borderRadius: 5
//     },
//     scaleR: {
//       aperture: 180,
//       minValue: 0,
//       maxValue: 100,
//       step: 10,
//       center: {
//         visible: false
//       },
//       tick: {
//         visible: false
//       },
//       item: {
//         offsetR: 0,
//         rules: [{
//           rule: '%i == 9',
//           offsetX: 15
//         }]
//       },
//       labels: ['0'],
//       ring: {
//         size: 50,
//         rules: [{
//             rule: '%v <= 50',
//             backgroundColor: '#E53935'
//           },
//           {
//             rule: '%v = 50',
//             backgroundColor: '#ffffff'
//           },
//           {
//             rule: '%v > 50 && %v < 65',
//             backgroundColor: '#EF5350'
//           },
//           {
//             rule: '%v >= 65 && %v < 85',
//             backgroundColor: '#FFA726'
//           },
//           {
//             rule: '%v >= 85',
//             backgroundColor: '#29B6F6'
//           }
//         ]
//       }
//     },
//     refresh: {
//       type: "feed",
//       transport: "js",
//       url: "feed()",
//       interval: 1500,
//       resetTimeout: 1000
//     },
//     series: [{
//       values: [0], // starting value
//       backgroundColor: 'black',
//       indicator: [10, 10, 10, 10, 0.75],
//       animation: {
//         effect: 2,
//         method: 1,
//         sequence: 4,
//         speed: 900
//       },
//     }]
//   };
//   console.log(machine)
//   zingchart.render({
//     id: machine,
//     data: datasetguage,
//     height: 500,
//     width: '100%'
//   });
//     ;}
 

// names.forEach((name, index) => rollCall(name, index));