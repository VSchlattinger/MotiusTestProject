/**
 * Created by Vale on 28/06/16.
 */

import angular from 'angular'
import 'angular-route'

import mainController from './controller/MainController'

'use strict';
var app = angular.module('TestProject', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'app/view/start.html',
            controller:  'MainController'
        })
        .otherwise({redirectTo: '/'});
}]);

app.controller('MainController', mainController);