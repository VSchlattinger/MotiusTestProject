/**
 * Created by Vale on 29/06/16.
 */

import Usecase from '../model/Usecase'

export default ['$http', function ($http) {
    "use strict";

    let url = "https://www.motius.de/api/usecases/"

    return {
        getAll: function (callback) {
            $http.get(url)
                .then(
                    function successCallback({data}) {
                        let usecases = data.map(
                            item => new Usecase(item)
                        );
                        callback({success: true, usecases});
                    },
                    function errorCallback({status, statusText}) {
                        console.log(status, statusText);
                        callback({success: false});
                    }
                )
        }
    }
}]