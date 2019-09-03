$(document).ready(function () {
    "use strict";
    var e = $("canvas").get(0).getContext("2d"),
        r = e.createLinearGradient(150, 0, 150, 300);
    r.addColorStop(0, "rgba(133, 180, 242, 0.91)"),
        r.addColorStop(1, "rgba(54, 162, 235, 0.94)");
    var o = e.createLinearGradient(146, 0, 154, 300);
    o.addColorStop(0, "rgba(255, 179, 112, 0.85)"),
        o.addColorStop(1, "rgba(255, 159, 64, 0.85)");
    var i = e.createLinearGradient(150, 0, 154, 300);
    i.addColorStop(0, "rgba(206,208,212,0.80)");
    i.addColorStop(0, "rgba(201,203,207,0.80)");
    var j = e.createLinearGradient(150, 0, 154, 300);
    j.addColorStop(0, "rgba(206,208,212,0.80)");
    j.addColorStop(0, "rgba(153,102,255,0.80)");

    var a = $("#lineChartExample"),
        d = (new Chart(a, {
                type: "line",
                options: {
                    legend: {
                        labels: {
                            fontColor: "#777",
                            fontSize: 12
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: !0,
                            gridLines: {
                                color: "#eee"
                            }
                      }],
                        yAxes: [{
                            display: !0,
                            gridLines: {
                                color: "#eee"
                            }
                          }]
                    }
                },
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {

                            label: "Total Views",
                            fill: !0,
                            lineTension: .3,
                            backgroundColor: r,
                            borderColor: r,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            borderWidth: 1,
                            pointBorderColor: r,
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: r,
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [30, 50, 40, 61, 42, 35, 40, 70, 9, 55, 30, 10],
                            spanGaps: !1
                        },
                        {
                            label: "Unique Visitors",
                            fill: !0,
                            lineTension: .3,
                            backgroundColor: o,
                            borderColor: o,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            borderWidth: 1,
                            pointBorderColor: o,
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: o,
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [50, 40, 50, 40, 45, 40, 30, 44, 55, 99, 77, 55],
                            spanGaps: !1
                        },
                        {
                            label: "Page Views",
                            fill: !0,
                            lineTension: .3,
                            backgroundColor: i,
                            borderColor: i,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            borderWidth: 1,
                            pointBorderColor: i,
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: i,
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [12, 34, 50, 66, 78, 58, 99, 33, 22, 35, 50, 60],
                            spanGaps: !1
                                      },
                        {
                            label: "Bounce Rate",
                            fill: !0,
                            lineTension: .3,
                            backgroundColor: j,
                            borderColor: j,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            borderWidth: 1,
                            pointBorderColor: j,
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: j,
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [42, 11, 60, 33, 88, 8, 55, 33, 55, 65, 70, 20],
                            spanGaps: !1
                                          }
                                        ]
                }
            }),
            $("#doughnutChartExample1")),
        t = (new Chart(d, {
                type: "doughnut",
                options: {
                    cutoutPercentage: 70
                },
                data: {
                    datasets: [{
                        data: [250, 50],
                        borderWidth: 0,
                        backgroundColor: ["#36a2eb", "#ff6384"],
                        hoverBackgroundColor: ["#36a2eb", "#ff6384"]
                    }]
                }
            }),
            $("#doughnutChartExample2")),
        t = (new Chart(d, {
                type: "doughnut",
                options: {
                    cutoutPercentage: 70
                },
                data: {
                    datasets: [{
                        data: [250, 50],
                        borderWidth: 0,
                        backgroundColor: ["#36a2eb", "#ff6384"],
                        hoverBackgroundColor: ["#36a2eb", "#ff6384"]
                    }]
                }
            }),
            $("#doughnutChartExample3")),
        t = (new Chart(d, {
                type: "doughnut",
                options: {
                    cutoutPercentage: 70
                },
                data: {
                    datasets: [{
                        data: [250, 50],
                        borderWidth: 0,
                        backgroundColor: ["#36a2eb", "#ff6384"],
                        hoverBackgroundColor: ["#36a2eb", "#ff6384"]
                    }]
                }
            }),
            $("#doughnutChartExample4")),
        t = (new Chart(d, {
                type: "doughnut",
                options: {
                    cutoutPercentage: 70
                },
                data: {
                    datasets: [{
                        data: [250, 50],
                        borderWidth: 0,
                        backgroundColor: ["#36a2eb", "#ff6384"],
                        hoverBackgroundColor: ["#36a2eb", "#ff6384"]
                    }]
                }
            }),

            $("#lineChartExample1")),
        t = (new Chart(t, {
                type: "line",
                options: {
                    scales: {
                        xAxes: [{
                            display: !0,
                            gridLines: {
                                display: !1
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 40,
                                min: 0,
                                stepSize: .5
                            },
                            display: !1,
                            gridLines: {
                                display: !1
                            }
                        }]
                    },
                    legend: {
                        display: !1
                    }
                },
                data: {
                    labels: ["A", "B", "C", "D", "E", "F", "G"],
                    datasets: [{
                        label: "Total Overdue",
                        fill: !0,
                        lineTension: 0,
                        backgroundColor: "transparent",
                        borderColor: "#6ccef0",
                        pointBorderColor: "#59c2e6",
                        pointHoverBackgroundColor: "#59c2e6",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        borderWidth: 3,
                        pointBackgroundColor: "#59c2e6",
                        pointBorderWidth: 0,
                        pointHoverRadius: 4,
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 0,
                        pointRadius: 4,
                        pointHitRadius: 0,
                        data: [20, 28, 30, 22, 24, 10, 7],
                        spanGaps: !1
                    }]
                }
            }),

            $("#lineChartExample2")),
        l = (new Chart(t, {
                type: "line",
                options: {
                    scales: {
                        xAxes: [{
                            display: !0,
                            gridLines: {
                                display: !1,
                                color: "#eee"
                            }
                        }],
                        yAxes: [{
                                ticks: {
                                    max: 40,
                                    min: 0,
                                    stepSize: .5
                                },
                                display: !1,
                                gridLines: {
                                    display: !1
                                }
                            }
                                                  ]
                    },
                    legend: {
                        display: !1
                    }
                },
                data: {
                    labels: ["A", "B", "C", "D", "E"],
                    datasets: [{
                        label: "Views",
                        fill: !0,
                        lineTension: 0,
                        backgroundColor: "transparent",
                        borderColor: "#36a2eb",
                        pointBorderColor: "#36a2eb",
                        pointHoverBackgroundColor: "#36a2eb",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        borderWidth: 3,
                        pointBackgroundColor: "#36a2eb",
                        pointBorderWidth: 0,
                        pointHoverRadius: 4,
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 0,
                        pointRadius: 4,
                        pointHitRadius: 0,
                        data: [20, 11, 30, 26, 22],
                        spanGaps: !1
                    }]
                }
            }),
            $("#pieChartExample")),
        i = (new Chart(l, {
                type: "pie",
                data: {
                    labels: ["A", "B", "C", "D"],
                    datasets: [{
                        data: [300, 50, 100, 80],
                        borderWidth: 0,
                        backgroundColor: ["#44b2d7", "#59c2e6", "#71d1f2", "#96e5ff"],
                        hoverBackgroundColor: ["#44b2d7", "#59c2e6", "#71d1f2", "#96e5ff"]
                    }]
                }
            }),
            $("#barChartExample")),
        n = (new Chart(i, {
                type: "bar",
                options: {
                    scales: {
                        xAxes: [{
                            display: !0,
                            gridLines: {
                                color: "#eee"
                            }
                        }],
                        yAxes: [{
                            display: !0,
                            gridLines: {
                                color: "#eee"
                            }
                        }]
                    }
                },
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                            label: "Data Set 1",
                            backgroundColor: [r, r, r, r, r, r, r],
                            hoverBackgroundColor: [r, r, r, r, r, r, r],
                            borderColor: [r, r, r, r, r, r, r],
                            borderWidth: 1,
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: "Data Set 2",
                            backgroundColor: [o, o, o, o, o, o, o],
                            hoverBackgroundColor: [o, o, o, o, o, o, o],
                            borderColor: [o, o, o, o, o, o, o],
                            borderWidth: 1,
                            data: [35, 40, 60, 47, 88, 27, 30]
                        }]
                }
            }),
            $("#barChart1")),
        s = (
            new Chart(n, {
                type: "bar",
                options: {
                    scales: {
                        xAxes: [{
                            display: !0,
                            gridLines: {
                                color: "#eee"
                            }
                      }],
                        yAxes: [{
                            display: !0,
                            gridLines: {
                                color: "#eee"
                            }
                          }]
                    }
                },
                data: {
                    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
                    datasets: [{
                            label: "Last Week",
                            backgroundColor: ["#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7"],
                            borderColor: ["#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7", "#44b2d7"],
                            borderWidth: 0,
                            data: [35, 55, 65, 85, 30, 64, 90]
                        },
                        {
                            label: "Current Week",
                            backgroundColor: ["#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6"],
                            borderColor: ["#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6", "#59c2e6"],
                            borderWidth: 0,
                            data: [49, 68, 85, 40, 27, 56, 64]
                        }]
                }
            }),
            $("#barChart2")),
        b = (new Chart(s, {
            type: "bar",
            options: {
                scales: {
                    xAxes: [{
                        display: !1
                    }],
                    yAxes: [{
                        display: !1
                    }]
                },
                legend: {
                    display: !1
                }
            },
            data: {
                labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
                datasets: [{
                    label: "Data Set 1",
                    backgroundColor: ["#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d"],
                    borderColor: ["#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d", "#54e69d"],
                    borderWidth: 1,
                    data: [40, 33, 22, 28, 40, 25, 30, 40, 28, 27, 22, 15]
                }]
            }
        }), $("#polarChartExample")),
        p = (new Chart(b, {
            type: "polarArea",
            options: {
                elements: {
                    arc: {
                        borderWidth: 0,
                        borderColor: "#aaa"
                    }
                }
            },
            data: {
                datasets: [{
                    data: [11, 16, 12, 11, 7],
                    backgroundColor: ["#e05f5f", "#e96a6a", "#ff7676", "#ff8b8b", "#fc9d9d"],
                    label: "My dataset"
                }],
                labels: ["A", "B", "C", "D", "E"]
            }
        }), $("#radarChartExample"));
    new Chart(p, {
        type: "radar",
        data: {
            labels: ["A", "B", "C", "D", "E", "C"],
            datasets: [{
                label: "First dataset",
                backgroundColor: "rgba(84, 230, 157, 0.4)",
                borderWidth: 2,
                borderColor: "rgba(75, 204, 140, 1)",
                pointBackgroundColor: "rgba(75, 204, 140, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(75, 204, 140, 1)",
                data: [65, 59, 90, 81, 56, 55]
            }, {
                label: "Second dataset",
                backgroundColor: "rgba(255, 119, 119, 0.4)",
                borderWidth: 2,
                borderColor: "rgba(255, 119, 119, 1)",
                pointBackgroundColor: "rgba(255, 119, 119, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255, 119, 119, 1)",
                data: [50, 60, 80, 45, 96, 70]
            }]
        }
    })
});
