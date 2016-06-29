/**
 * Created by Vale on 28/06/16.
 */

export default ['$scope', '$mdDialog', 'UseCasesService', function ($scope, $mdDialog, UseCasesService) {

    $scope.loading = {
        state: "loading"
    };

    UseCasesService.getAll(function ({success, usecases}) {
        "use strict";
        $scope.loading.state = "finished";

        if (success) {
            $scope.usecases = usecases;
        } else {
            alert("Unable to load usecases from API.");
        }
    });

    $scope.showMilestones = function (ev, usecase) {
        "use strict";
        $mdDialog.show({
            controller: 'MilestonesController',
            templateUrl: './app/view/milestones.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            ariaLabel: 'Milestones',
            locals: {
                usecase
            }
        });
    };
}]