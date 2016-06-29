/**
 * Created by Vale on 28/06/16.
 */

import angular from 'angular'
import 'angular-route'
import 'angular-animate'
import 'angular-material'
import 'angular-sanitize'

import usecasesController from './controller/UsecasesController'
import milestonesController from './controller/MilestonesController'
import usecaseFactory from './factory/UsecaseFactory'

'use strict';
var app = angular.module('TestProject', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngSanitize']);

app.factory("UseCasesService", usecaseFactory);
app.controller('UsecasesController', usecasesController);
app.controller('MilestonesController', milestonesController);

app.config(['$routeProvider', '$mdThemingProvider',
    function ($routeProvider, $mdThemingProvider) {

        $routeProvider
        // route for the home page
            .when('/', {
                templateUrl: 'app/view/usecases.html',
                controller: 'UsecasesController'
            })
            .otherwise({redirectTo: '/'});

        // Material Design Settings (colors should match the ones in the imported css in index.html)
        $mdThemingProvider
            .theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
    }]);