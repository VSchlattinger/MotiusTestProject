/**
 * Created by Vale on 28/06/16.
 */

import angular from 'angular'
import 'angular-route'
import 'angular-animate'
import 'angular-material'
import 'angular-sanitize'

import usecasesController from './controller/UsecasesController'
import usecaseFactory from './factory/UsecaseFactory'

'use strict';
var app = angular.module('TestProject', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', '$mdThemingProvider',
    function ($routeProvider, $locationProvider, $mdThemingProvider) {

        $routeProvider
        // route for the home page
            .when('/', {
                templateUrl: 'app/view/usecases.html',
                controller: 'UseCasesController'
            })
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
    }]);

app.factory("UseCasesService", usecaseFactory);
app.controller('UseCasesController', usecasesController);