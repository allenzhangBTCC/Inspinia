/**
 * Created by allenzhang on 11/13/15.
 */

angular
    .module('inspinia')
    .controller('adminLoginCtrl',adminLoginCtrl)

function adminLoginCtrl($scope,$location,adminLoginService){

//var data=[
//    {   username:allen,
//        password:900720
//    },
//    {
//
//        username:"admin",
//        password:"admin"
//
//    }
//];
    var accounts=[];
    accounts=adminLoginService.getUser();

$scope.userLogin=function(){

for(var i=0;i<accounts.length;i++){
    if(($scope.loginModel.username=accounts[i].username) && ($scope.loginModel.password=accounts[i].password)){

            //adminFactory.getUser = $scope.loginModel.username;

        var userName = accounts[i].username;

        $location.path('/index/main');

    }

}
}
}