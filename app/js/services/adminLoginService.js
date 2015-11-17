/**
 * Created by allenzhang on 11/13/15.
 */
angular
    .module('inspinia')
    .service('adminLoginService',function(){

        var data=[
            {   username:allen,
                password:900720
            },
            {

                username:"admin",
                password:"admin"

            }
        ];
        this.getUser=function(){
            return data;

        }


    });
