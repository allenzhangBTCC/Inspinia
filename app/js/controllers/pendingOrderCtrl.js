/**
 * Created by allenzhang on 11/16/15.
 */

'use strict'
angular
    .module('inspinia')
    .controller('pendingOrderCtrl',pendingOrderCtrl)
    .controller('pendingOrderChartistCtrl',pendingOrderChartistCtrl);


var allen=[];
var wade=[];


function pendingOrderCtrl($scope,$http) {

    //$scope.searchAccount = "";

     //var sideChange=[];
     //$scope.startSearch = function (){
    $http.get('http://localhost:3000/api/accounts/details/88').
     success(function (data) {

        $scope.todos=data;
         //sideChange.push(data);
    })

     //};

      //console.log(sideChange);
    // for(var i=0;i<sideChange.length; i++ ){
    //     if(sideChange[i].side="1"){
    //         sideChange[i].splice(2,1,"buy");
    //     }
    // }
    //console.log(sideChange);
    //$scope.todo=sideChange;
    //console.log($scope.todo);


//alert($scope.todos);
//    var side1=[];
//
//      side1.push($scope.todos);
//alert(side1);
//    for(var i=0;i<side1.length;i++){
//        if (side1[i].side= "1"){
//            side1[i].side="buy";
//        }else{
//            side1[i].side="sell";
//        }
//    }
//

//     alert(side1);
    //$scope.todos = pendingOrderService.getData();
    //alert($scope.todos);
    //var data=[];
    //data = $scope.todos;
    //for (var i = 0; i < data.length; i++) {
    //    allen.push(data[i].price);
    //    wade.push(data[i].leave_quantity);
    //    //wade.push(allen);
    //    //allen=[];
    //}

}
function pendingOrderChartistCtrl() {

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


