/**
 * Created by Vale on 29/06/16.
 */

export default ['$scope', '$mdDialog', 'locals', function ($scope, $mdDialog, {usecase}) {

    $scope.usecase = usecase;

    $scope.hide = function () {
        $mdDialog.hide();
    };
}]