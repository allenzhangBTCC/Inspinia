/**
 * Created by allenzhang on 11/16/15.
 */

angular
    .module('inspinia')
    .service('pendingOrderService',function($http){

        var pendingdata=[];
        this.getData = function () {

            $http.get('http://localhost:3000/api/accounts/details/93').

            success(function (data) {
                pendingdata.push(data);
                alert(pendingdata);
                return pendingdata;
            });
        };

        });

            //setTimeout(function(){
            //    return pendingdata;
            //},2000);






