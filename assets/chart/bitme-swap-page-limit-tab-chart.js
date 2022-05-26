var options = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100, ]
    }],

    chart: {
        id: 'area-datetime',
        height: 300,
        type: 'area',
        toolbar: false,
        zoom: {
            autoScaleYaxis: true
        }
    },
    fill: {
        type: 'gradient',
        colors: ['rgba(0, 203, 255, 0.35)', 'rgba(0, 203, 255, 0)'],
        gradient: {
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [70, 98, 100],
        }
    },
    dataLabels: {
        enabled: false
    },

    markers: {
        size: 0,
        style: 'hollow',
    },
    stroke: {
        curve: 'smooth',
    },
    xaxis: {
        type: 'datetime',
        min: new Date('2018-09-19T00:00:00.000Z').getTime(),
        tickAmount: 5,
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
        labels: {
            show: true,
            datetimeFormatter: {
                hour: 'HH:mmTT',
            },
            style: {
                fontSize: '13px',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },

    },

    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    }
};

var chartLimit = new ApexCharts(document.querySelector("#chart-timeline-limit"), options);
chartLimit.render();

document
    .querySelector('#limit_one_month')
    .addEventListener('click', function(e) {
        chartLimit.zoomX(
            new Date('2018-09-19T00:00:00.000Z').getTime(),
            new Date('2018-09-19T01:30:00.000Z').getTime()
        )
    })

document
    .querySelector('#limit_six_months')
    .addEventListener('click', function(e) {
        chartLimit.zoomX(
            new Date('2018-09-19T00:30:00.000Z').getTime(),
            new Date('2018-09-19T03:30:00.000Z').getTime()
        )
    })

document
    .querySelector('#limit_one_year')
    .addEventListener('click', function(e) {
        chartLimit.zoomX(
            new Date('2018-09-19T00:30:00.000Z').getTime(),
            new Date('2018-09-19T04:30:00.000Z').getTime()
        )
    })

document.querySelector('#limit_ytd').addEventListener('click', function(e) {
    chartLimit.zoomX(
        new Date('2018-09-19T00:30:00.000Z').getTime(),
        new Date('2018-09-19T05:30:00.000Z').getTime()
    )
})

document.querySelector('#limit_all').addEventListener('click', function(e) {
    chartLimit.zoomX(
        new Date('2018-09-19T00:30:00.000Z').getTime(),
        new Date('2018-09-19T06:30:00.000Z').getTime()
    )
})