/**
 * Created by Vale on 29/06/16.
 */

import vis from 'vis'

export default ['$scope', '$mdDialog', 'locals', function ($scope, $mdDialog, {usecase}) {

    $scope.usecase = usecase;

    $scope.hide = function () {
        $mdDialog.hide();
    };

    //setup timeline
    let timeline = null;
    $scope.showTimeline = function () {
        //Here your view content is fully loaded !!
        let container = document.querySelector('#timeline');
        if (container && !timeline) {
            timeline = new vis.Timeline(container, usecase.milestones, {});
        }
    };

}]