/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $routeProvider,$ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/adminLogin");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded

        debug: false
    });


    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })
        .state('adminLogin',{
            url:"/adminLogin",
            templateUrl:"views/nav/adminLogin.html",
            data: {
                pageTitle: 'Login',
                specialClass: 'gray-bg'
            }

        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/nav/main.html",
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load([{

                        files: ['/bower_components/chartjs/Chart.min.js']
                    },
                        {
                            files: ['/bower_components/angles/angles.js']
                        }

                    ]);
                }
            }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/nav/minor.html",
            data: {
                pageTitle: 'minor'
            }

        })
        .state('index.dailyAccountsCreated', {
            url: "/dailyAccountsCreated",
            templateUrl: "views/nav/dailyAccountsCreated.html",
            data: { pageTitle: 'Daily Accounts Created' }
        })
        .state('index.dailyAccountsActive', {
            url: "/dailyAccountsActive",
            templateUrl: "views/nav/dailyAccountsActive.html",
            data: { pageTitle: 'Daily Accounts Active' }
        })
        .state('index.dailyAccountTransfers', {
            url: "/dailyAccountTransfers",
            templateUrl: "views/nav/dailyAccountTransfers.html",
            data: { pageTitle: 'Daily Account Transfers' }
        })
        .state('index.dailyTickers', {
            url: "/dailyTickers",
            templateUrl: "views/nav/dailyTickers.html",
            data: { pageTitle: 'Daily Tickers' }
        })
        .state('index.dailyFees', {
            url: "/dailyFees",
            templateUrl: "views/nav/dailyFees.html",
            data: { pageTitle: 'Daily Fees' }
        })
        .state('index.accounts', {
            url: "/accounts",
            templateUrl: "views/nav/accounts.html",
            data: { pageTitle: 'Accounts' }
        })
        .state('index.accountBalances', {
            url: "/accountBalances",
            templateUrl: "views/nav/accountBalances.html",
            data: { pageTitle: 'Account Balances' }
        })
        .state('index.accountTransfer', {
            url: "/accountTransfer",
            templateUrl: "views/nav/accountTransfer.html",
            data: { pageTitle: 'Account Transfer' }
        })
        .state('index.accountTransfers', {
            url: "/accountTransfers",
            templateUrl: "views/nav/accountTransfers.html",
            data: { pageTitle: 'Account Transfers' }
        })
        .state('index.accountWinners', {
            url: "/accountWinners",
            templateUrl: "views/nav/accountWinners.html",
            data: { pageTitle: 'Account Winners' }
        })
        .state('index.accountLosers', {
            url: "/accountLosers",
            templateUrl: "views/nav/accountLosers.html",
            data: { pageTitle: 'Account Losers' }
        })
        .state('index.positionsLong', {
            url: "/positionsLong",
            templateUrl: "views/nav/positionsLong.html",
            data: { pageTitle: 'Positions Long' }
        })
        .state('index.positionsShort', {
            url: "/positionsShort",
            templateUrl: "views/nav/positionsShort.html",
            data: { pageTitle: 'Positions Short' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        {
                            serie: true,
                            files: ['/bower_components/datatables/media/js/jquery.dataTables.js', '/bower_components/datatables/media/css/dataTables.bootstrap.css']
                        },
                        {
                            serie: true,
                            files: ['/bower_components/datatables/media/js/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['/bower_components/angular-datatables/dist/angular-datatables.min.js']
                        },
                        //{
                        //    serie: true,
                        //    name: 'angular-chartist',
                        //    files: ['/bower_components/chartist/dist/chartist.min.js', '/bower_components/chartist/dist/chartist.min.css', '/bower_components/angular-chartist/dist/angular-chartist.min.js']
                        //}

                    ]);
                }
            }
        })
        .state('index.pendingOrders', {
            url: "/pendingOrder",
            templateUrl: "views/nav/pendingOrder.html",
            data: { pageTitle: 'Pending Order' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        {
                            serie: true,
                            files: ['/bower_components/datatables/media/js/jquery.dataTables.js', '/bower_components/datatables/media/css/dataTables.bootstrap.css']
                        },
                        {
                            serie: true,
                            files: ['/bower_components/datatables/media/js/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['/bower_components/angular-datatables/dist/angular-datatables.min.js']
                        },
                        //{
                        //    serie: true,
                        //    name: 'angular-chartist',
                        //    files: ['/bower_components/chartist/dist/chartist.min.js', '/bower_components/chartist/dist/chartist.min.css', '/bower_components/angular-chartist/dist/angular-chartist.min.js']
                        //}

                    ]);
                }
            }

        })

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
