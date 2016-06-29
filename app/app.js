/**
 * Created by Vale on 28/06/16.
 */

import angular from 'angular'
import 'angular-route'
import 'angular-animate'
import 'angular-material'

import usecasesController from './controller/UsecasesController'

'use strict';
var app = angular.module('TestProject', ['ngRoute', 'ngAnimate', 'ngMaterial']);

app
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        // route for the home page
            .when('/', {
                templateUrl: 'app/view/usecases.html',
                controller: 'UseCasesController'
            })
            .otherwise({redirectTo: '/'});
    }])

    .config(['$mdThemingProvider', function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('indigo');
    }]);


app.controller('UseCasesController', usecasesController);