/**
 * Created by allenzhang on 11/13/15.
 */

'use strict'
angular
    .module('inspinia')
    .controller('positionShortCtrl',positionShortCtrl)
    .controller('positionShortChartistCtrl',positionShortChartistCtrl);


var allen=[];
var wade=[];

function positionShortChartistCtrl() {

    this.lineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }

    this.lineOptions = {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    }

    var times = function (n) {
        return Array.apply(null, new Array(n));
    };

    var prepareData = times(26).map(Math.random).reduce(function (data, rnd, index) {
        data.labels.push(index + 1);
        data.series.forEach(function (series) {
            series.push(Math.random() * 100)
        });

        return data;
    }, {
        labels: [],
        series: times(4).map(function () {
            return new Array()
        })
    });

    this.scatterData = prepareData;

    this.scatterOptions = {
        showLine: false,
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return index % 13 === 0 ? 'W' + value : null;
            }
        }
    }

    this.stackedData = {
        labels: allen,
        series: [
            //[800000, 1200000, 1400000, 1300000],
            //[200000, 400000, 500000, 300000],
            //[100000, 200000, 400000, 600000]
            wade
        ]
    }
    this.stackedOptions = {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value) {
                return (value);
            }
        }
    }

    this.horizontalData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    }

    this.horizontalOptions = {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
    }

    var prepareData = {
        series: [5, 3, 4]
    }

    this.pieData = prepareData

    var sum = function (a, b) {
        return a + b
    };

    this.pieOptions = {
        labelInterpolationFnc: function (value) {
            return Math.round(value / prepareData.series.reduce(sum) * 100) + '%';
        }
    }

    this.gaugeData = {
        series: [20, 10, 30, 40]
    }

    this.gaugeOptions = {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
    }

}

function positionShortCtrl($scope,$http,positionShortService) {

    //New Addly data
    //$scope.todos = [
    //    {
    //        "account": "93",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 64
    //
    //    },
    //    {
    //        "account": "43",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 232
    //    },
    //    {
    //        "account": "32",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 23
    //    },
    //    {
    //        "account": "13",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 12
    //    },
    //    {
    //        "account": "30",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 123
    //    },
    //    {
    //        "account": "9",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 86
    //    },
    //    {
    //        "account": "77",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 67
    //    },
    //    {
    //        "account": "55",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 354
    //    },
    //    {
    //        "account": "23",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 9
    //    },
    //    {
    //        "account": "98",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 88
    //    },
    //    {
    //        "account": "45",
    //        "email": "bt.cchinastagingtesting1125@gmail.com",
    //        "total_short_position": 198
    //    }
    //
    //
    //];

    $scope.todos= positionShortService.getData();
    var data=[];
    data = $scope.todos;
    for (var i = 0; i < data.length; i++) {
        allen.push(data[i].account);
        wade.push(data[i].total_short_position);
        //wade.push(allen);
        //allen=[];
    }
}

