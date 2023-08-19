const machine_name=JSON.parse(document.getElementById("machine_name").textContent)
console.log("group Name....",machine_name)

// names = ["anna", "beth", "chris", "daniel", "ethan"]
names = machine_name

function rollCall(name, index) {

    console.log(`Is the number ${index + 1} student - ${name} present? Yes!`)

    var machine = `${name}`
    let text1 = "1";
    let text2 = "2";
    let result1 = machine.concat(text1);
    let result2 = machine.concat(text2);
    console.log("this is result",result1)
    console.log("this is result",result2)



const ctx4 = document.getElementById("myChart4").getContext('2d');

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
var myChart8 = new Chart(ctx4, graphData4 );  



}

names.forEach((name, index) => rollCall(name, index));



