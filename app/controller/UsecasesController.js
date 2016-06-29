/**
 * Created by Vale on 28/06/16.
 */

export default ['$scope', 'UseCasesService', function ($scope, UseCasesService) {

    $scope.loading = {
        state: "loading"
    };

    UseCasesService.getAll(function ({success, usecases}) {
        "use strict";

        $scope.loading.state = "finished";

        if (success) {
            $scope.cards = usecases;
        } else {
            alert("Unable to load usecases from API.");
        }
    });
}]