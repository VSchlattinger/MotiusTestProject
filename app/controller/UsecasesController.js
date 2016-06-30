/**
 * Created by Vale on 28/06/16.
 */

export default ['$scope', '$mdDialog', 'UseCasesService', function ($scope, $mdDialog, UseCasesService) {

    //show loading text
    $scope.state = {
        loading: true
    };

    // get usecases from API
    UseCasesService.getAll(function ({success, usecases}) {
        "use strict";
        $scope.state.loading = false;

        if (success) {
            // map usecases to cards
            $scope.cards = usecases.map(
                function ({title, body, milestones}) {
                    return {
                        title,
                        supportingText: body,
                        showActions: milestones.length > 0,
                        usecase: {title, milestones}
                    };
                }
            );
        } else {
            alert("Unable to load usecases from API.");
        }
    });

    $scope.showMilestones = function (ev, {usecase}) {
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