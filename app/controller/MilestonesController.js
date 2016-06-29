/**
 * Created by Vale on 29/06/16.
 */

export default ['$scope', '$mdDialog', function ($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };
}]