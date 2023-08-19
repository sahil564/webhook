

let a=[85]

var ws = new WebSocket('ws://'+window.location.host + '/ws/guage/sahil/')
console.log("this is websocket values for guage chart")



ws.onmessage = function(e){
    let djangoData=JSON.parse(e.data);
    console.log("this is websocket values for guage chart",djangoData.value)
    a.push(djangoData.value);
    console.log("this is last elements",a.slice(-1).pop())
    console.log("this is last",a)
}



console.log("this is ",a)






  window.feed = function(callback) {
    var tick = {};
    // tick.plot0 = Math.ceil(0 + (Math.random() * 100));
    tick.plot0 = Math.ceil(0 + a.slice(-1).pop());
    callback(JSON.stringify(tick));
  };
   
  var myConfig = {
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
   
  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: 500,
    width: '100%'
  });






















let b=[50]  


  window.feed = function(callback) {
    var tick = {};
    tick.plot0 = Math.ceil(0 + b.slice(-1).pop());
    callback(JSON.stringify(tick));
  };
   
  var myConfig1 = {
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
   
  zingchart.render({
    id: 'myChart1',
    data: myConfig1,
    height: 500,
    width: '100%'
  });










  let c=[20]  

  window.feed = function(callback) {
    var tick = {};
    tick.plot0 = Math.ceil(0 + c.slice(-1).pop());
    callback(JSON.stringify(tick));
  };
   
  var myConfig2 = {
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
   
  zingchart.render({
    id: 'myChart2',
    data: myConfig2,
    height: 500,
    width: '100%'
  });























































  


  let d=[80]  

  window.feed = function(callback3) {
    var tick1 = {};
    tick1.plot0 = Math.ceil(0 + d.slice(-1).pop());
    callback3(JSON.stringify(tick1));
  };
   
  var myConfig3 = {
    type: "gauge",
    globals: {
      fontSize: 25
    },
    plotarea: {
      marginTop: 130
    },

    subtitle: {
      "text": " ",
      "font-weight": "normal"
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
   
  zingchart.render({
    id: 'myChart3',
    data: myConfig3,
    height: 500,
    width: '100%'
  });

