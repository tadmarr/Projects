(function(){
angular.module('employeeApp')
.factory('employeeFactory', function($http) {
        //define dependencies
        var employeeFactory = {}
            ,BASE_URL = "http://localhost:5984/employee_data_base/"
            ,URL_FOR_DELETE = "729128739b34e541b055b506e5006f39?rev=3-19632e6bba6028a996f1e67b7d5b08aa"
            // "23f49f6707c1d620331cea6c540018e6?2-a19f8a01339627875531891a673d520f="
            ,getEmployeeInfo
            ,addEmployeeInfo
            ,putEmployeeInfo
            ,deleteEmployeeInfo;

        // Define CRUD methods
        getEmployeeInfo = function (){
            return $http.get(BASE_URL + "_design/other/_view/other")
                .success(function(response, status, headers, config){
                })
                .error(function(error, status, headers, config){
                });
            }

        //inject CRUD methods
        addEmployeeInfo = function (employee){
            return $http.post(BASE_URL, employee)
                .success(function(response, status, headers, config){
                })
                .error(function(error, status, headers, config){
                });
            }

        editEmployeeInfo = function (employee){console.log(employee._id);
            return $http.put(BASE_URL + employee._id, employee)
                .success(function(response, status, headers, config){
                })
                .error(function(error, status, headers, config){
                });
            }

        deleteEmployeeInfo = function (employee){

            var confirmDelete = confirm("Are you sure you want to delete?");
            if(confirmDelete){

                return $http.delete(BASE_URL + employee._id + "?rev=" + employee._rev)
                    .success(function(response, status, headers, config){
                        alert("Information deleted");
                    })
                    .error(function(error, status, headers, config){
                        alert("Action cancelled");
                    });
                }
                else{ }
            }
        // Assign defined methods to employeeFactory object
        employeeFactory.getEmployeeInfo = getEmployeeInfo;
        employeeFactory.addEmployeeInfo = addEmployeeInfo;
        employeeFactory.editEmployeeInfo = editEmployeeInfo;
        employeeFactory.deleteEmployeeInfo = deleteEmployeeInfo;


        //return injected object
        return employeeFactory;

});

})();

//        /{db}/_design/{ddoc}
//        HEAD /{db}/_design/{ddoc}	Returns bare information in the HTTP Headers for the design document
//        GET /{db}/_design/{ddoc}	Returns the design document
//        PUT /{db}/_design/{ddoc}	Creates a new design document or new version of an existing one
//        DELETE /{db}/_design/{ddoc}	Deletes the design document
//        COPY /{db}/_design/{ddoc}	Copies the design document
