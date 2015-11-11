'use strict';

angular.module('inspinia', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "components/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "app/nav/main.html",
            data: { pageTitle: 'Example view' },


        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "app/nav/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.dailyAccountsCreated', {
            url: "/dailyAccountsCreated",
            templateUrl: "app/nav/dailyAccountsCreated.html",
            data: { pageTitle: 'Daily Accounts Created' }
        })
        .state('index.dailyAccountsActive', {
            url: "/dailyAccountsActive",
            templateUrl: "app/nav/dailyAccountsActive.html",
            data: { pageTitle: 'Daily Accounts Active' }
        })
        .state('index.dailyAccountTransfers', {
            url: "/dailyAccountTransfers",
            templateUrl: "app/nav/dailyAccountTransfers.html",
            data: { pageTitle: 'Daily Account Transfers' }
        })
        .state('index.dailyTickers', {
            url: "/dailyTickers",
            templateUrl: "app/nav/dailyTickers.html",
            data: { pageTitle: 'Daily Tickers' }
        })
        .state('index.dailyFees', {
            url: "/dailyFees",
            templateUrl: "app/nav/dailyFees.html",
            data: { pageTitle: 'Daily Fees' }
        })
        .state('index.accounts', {
            url: "/accounts",
            templateUrl: "app/nav/accounts.html",
            data: { pageTitle: 'Accounts' }
        })
        .state('index.accountBalances', {
            url: "/accountBalances",
            templateUrl: "app/nav/accountBalances.html",
            data: { pageTitle: 'Account Balances' }
        })
        .state('index.accountTransfer', {
            url: "/accountTransfer",
            templateUrl: "app/nav/accountTransfer.html",
            data: { pageTitle: 'Account Transfer' }
        })
        .state('index.accountTransfers', {
            url: "/accountTransfers",
            templateUrl: "app/nav/accountTransfers.html",
            data: { pageTitle: 'Account Transfers' }
        })
        .state('index.accountWinners', {
            url: "/accountWinners",
            templateUrl: "app/nav/accountWinners.html",
            data: { pageTitle: 'Account Winners' }
        })
        .state('index.accountLosers', {
            url: "/accountLosers",
            templateUrl: "app/nav/accountLosers.html",
            data: { pageTitle: 'Account Losers' }
        })
        .state('index.positionsLong', {
            url: "/positionsLong",
            templateUrl: "app/nav/positionsLong.html",
            data: { pageTitle: 'Positions Long' }
        })
        .state('index.positionsShort', {
            url: "/positionsShort",
            templateUrl: "app/nav/positionsShort.html",
            data: { pageTitle: 'Positions Short' }
        })

    $urlRouterProvider.otherwise('/index/main');
  })
;
