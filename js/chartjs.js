// var config = {
//     type: 'doughnut',
//     data: {
//         datasets: [{
//             data: [
//                 20,100
//             ],
//             backgroundColor: [
//                 window.chartColors.red,         
//                 window.chartColors.blue,
//             ],
//             // label: 'Dataset 1'
//         }],
//        // labels: [
//        //     "Red",
//        //     "Blue"
//        // ]
//     },
//     options: {
//         responsive: false,
//         maintainAspectRatio: false,
//         legend: {
//             position: 'top',
//         },
//         animation: {
//             animateScale: true,
//             animateRotate: true
//         }
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// };

// window.onload = function() {
//     var ctx = document.getElementById("myChart").getContext("2d");
//     window.myDoughnut = new Chart(ctx, config);
// };

// document.getElementById('randomizeData').addEventListener('click', function() {
//     config.data.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });
//     });

//     window.myDoughnut.update();
// });


$(document).ready(function(){
    "use strict";
    var e=$("canvas").get(0).getContext("2d"),
    r=e.createLinearGradient(150,0,150,300);
    r.addColorStop(0,"rgba(133, 180, 242, 0.91)"),
    r.addColorStop(1,"rgba(255, 119, 119, 0.94)");
    var o=e.createLinearGradient(146,0,154,300);
    o.addColorStop(0,"rgba(104, 179, 112, 0.85)"),
    o.addColorStop(1,"rgba(76, 162, 205, 0.85)");

        var a = $("#doughnutChartExample2"),
        t = (
            new Chart(
                        a,{
                        type:"doughnut",
                        options:{
                            cutoutPercentage:70
                        },
                        data:{
                            datasets:[
                                {
                                    data:[75,100],
                                    borderWidth:0,
                                    backgroundColor:["#ff9f40","#ff6384"],
                                    hoverBackgroundColor:["#ff9f40","#ff6384"]
                                }
                            ]
                        }
                    }
                )
        )
    });


$(document).ready(function(){
    "use strict";
    var e=$("canvas").get(0).getContext("2d"),
    r=e.createLinearGradient(150,0,150,300);
    r.addColorStop(0,"rgba(133, 180, 242, 0.91)"),
    r.addColorStop(1,"rgba(255, 119, 119, 0.94)");
    var o=e.createLinearGradient(146,0,154,300);
    o.addColorStop(0,"rgba(104, 179, 112, 0.85)"),
    o.addColorStop(1,"rgba(76, 162, 205, 0.85)");

        var a = $("#doughnutChartExample3"),
        t = (
            new Chart(
                        a,{
                        type:"doughnut",
                        options:{
                            cutoutPercentage:70
                        },
                        data:{
                            datasets:[
                                {
                                    data:[20,100],
                                    borderWidth:0,
                                    backgroundColor:["#c9cbcf","#ff6384"],
                                    hoverBackgroundColor:["#c9cbcf","#ff6384"]
                                }
                            ]
                        }
                    }
                )
        )
    });


$(document).ready(function(){
    "use strict";
    var e=$("canvas").get(0).getContext("2d"),
    r=e.createLinearGradient(150,0,150,300);
    r.addColorStop(0,"rgba(133, 180, 242, 0.91)"),
    r.addColorStop(1,"rgba(255, 119, 119, 0.94)");
    var o=e.createLinearGradient(146,0,154,300);
    o.addColorStop(0,"rgba(104, 179, 112, 0.85)"),
    o.addColorStop(1,"rgba(76, 162, 205, 0.85)");

        var a = $("#doughnutChartExample4"),
        t = (
            new Chart(
                        a,{
                        type:"doughnut",
                        options:{
                            cutoutPercentage:70
                        },
                        data:{
                            datasets:[
                                {
                                    data:[130,100],
                                    borderWidth:0,
                                    backgroundColor:["#9966ff","#ff6384"],
                                    hoverBackgroundColor:["#9966ff","#ff6384"]
                                }
                            ]
                        }
                    }
                )
        )
    });


var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"],
                datasets: [{
                    label: "View",
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "View",
                    borderColor: window.chartColors.blue,
                    backgroundColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "View",
                    borderColor: window.chartColors.gray,
                    backgroundColor: window.chartColors.gray,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
                    label: "View",
                    borderColor: window.chartColors.yellow,
                    backgroundColor: window.chartColors.yellow,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                
                    animation: {
                    animateScale: true,
                    animateRotate: true
                },
                title:{
                    display:false,
                    text:"Chart.js Line Chart - Stacked Area"
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        };


var data = [
    { y: '2014', a: 50, b: 90},
    { y: '2015', a: 65,  b: 75},
    { y: '2016', a: 50,  b: 50},
    { y: '2017', a: 75,  b: 60},
    { y: '2018', a: 80,  b: 65},
    { y: '2019', a: 90,  b: 70},
    { y: '2020', a: 100, b: 75},
    { y: '2021', a: 115, b: 75},
    { y: '2022', a: 120, b: 85},
    { y: '2023', a: 145, b: 85},
    { y: '2024', a: 160, b: 95}
],
    config = {
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['gray','red']
    };
config.element = 'area-chart';
Morris.Area(config);
config.element = 'line-chart';
Morris.Line(config);
config.element = 'bar-chart';
Morris.Bar(config);
config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);
Morris.Donut({
    element: 'pie-chart',
    data: [
        {label: "Friends", value: 30},
        {label: "Allies", value: 15},
        {label: "Enemies", value: 45},
        {label: "Neutral", value: 10}
    ]
});


var buyerData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : [203,156,99,251,305,247]
        }
    ]
}
// get line chart canvas
var buyers = document.getElementById('buyers').getContext('2d');
// draw line chart
new Chart(buyers).Line(buyerData);
// pie chart data
var pieData = [
    {
        value: 20,
        color:"#878BB6"
    },
    {
        value : 40,
        color : "#4ACAB4"
    },
    {
        value : 10,
        color : "#FF8153"
    },
    {
        value : 30,
        color : "#FFEA88"
    }
];
// pie chart options
var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
}
// get pie chart canvas
var countries= document.getElementById("countries").getContext("2d");
// draw pie chart
new Chart(countries).Pie(pieData, pieOptions);
// bar chart data
var barData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "#48A497",
            strokeColor : "#48A4D1",
            data : [456,479,324,569,702,600]
        },
        {
            fillColor : "rgba(73,188,170,0.4)",
            strokeColor : "rgba(72,174,209,0.4)",
            data : [364,504,605,400,345,320]
        }
    ]
}
// get bar chart canvas
var income = document.getElementById("income").getContext("2d");
// draw bar chart
new Chart(income).Bar(barData);