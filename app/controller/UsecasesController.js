/**
 * Created by Vale on 28/06/16.
 */

export default ['$scope', 'UseCasesService', function ($scope, UseCasesService) {
    UseCasesService.getAll(function ({success, usecases}) {
        "use strict";
        if (success) {
            $scope.cards = usecases;
        } else {
            alert("Unable to load usecases from API.");
        }
    });
}]