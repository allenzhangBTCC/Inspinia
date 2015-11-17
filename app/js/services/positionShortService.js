/**
 * Created by allenzhang on 11/13/15.
 */

angular
    .module('inspinia')
    .service('positionShortService',function(){

    var data= [
        {
            "account": "93",
            "email": "bt.cchinastagingtesting112@gmail.com",
            "total_short_position": 64

        },
        {
            "account": "43",
            "email": "bt.cchinastagingtesting115@gmail.com",
            "total_short_position": 232
        },
        {
            "account": "32",
            "email": "bt.cchinastagingtesting125@gmail.com",
            "total_short_position": 23
        },
        {
            "account": "13",
            "email": "bt.cchinastagingtesting925@gmail.com",
            "total_short_position": 1
        },
        {
            "account": "30",
            "email": "bt.cchinastagingtesting325@gmail.com",
            "total_short_position": 123
        },
        {
            "account": "9",
            "email": "bt.cchinastagingtesting625@gmail.com",
            "total_short_position": 86
        },
        {
            "account": "77",
            "email": "bt.cchinastagingtesting1185@gmail.com",
            "total_short_position": 67
        },
        {
            "account": "55",
            "email": "bt.cchinastagingtesting11250@gmail.com",
            "total_short_position": 354
        },
        {
            "account": "23",
            "email": "bt.cchinastagingtesting25@gmail.com",
            "total_short_position": 9
        },
        {
            "account": "98",
            "email": "bt.cchinastagingtesting5@gmail.com",
            "total_short_position": 88
        },
        {
            "account": "45",
            "email": "bt.cchinastagingtesting1@gmail.com",
            "total_short_position": 198
        }

    ];

    this.getData=function(){
        return data;
    }

});
