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
                    function successCallback(response) {
                        let usecases = [];
                        response.data.forEach(
                            usecase => usecases.push(new Usecase(usecase))
                        );
                        callback({success: true, usecases});
                    },
                    function errorCallback(response) {
                        console.log(response.status, response.statusText);
                        callback({success: false});
                    }
                )
        }
    }
}]