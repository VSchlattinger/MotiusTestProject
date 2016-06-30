/**
 * Created by Vale on 29/06/16.
 */

import vis from 'vis'

export default ['$scope', '$mdDialog', 'locals', function ($scope, $mdDialog, {usecase}) {

    $scope.title = `Milestones - ${usecase.title}`;

    $scope.hide = function () {
        $mdDialog.hide();
    };

    // save timeline to prevent repeated creation
    let timeline = null;

    $scope.showTimeline = function () {
        if(timeline){
            return;     //don't create timeline if it already exists
        }
        let container = document.querySelector('#timeline');
        if (container) {
            // map fields of Milestone to required fields by vis.Timeline's data argument
            let data = usecase.milestones.map(
                function ({id, name, start_date, end_date}) {
                    "use strict";
                    return {
                        id,
                        content: name,
                        start: start_date,
                        end: end_date
                    }
                }
            );
            // create timeline
            timeline = new vis.Timeline(
                container,      //DOM element
                data,           //data
                {}              //options
            );
        }
    };

}]