function validator(employee){
    var last = first = middle = age = designation = salary = result = new Boolean(false);
    // lastname validation *need to exclude symbols
    if (employee.lastname.length >= 3 && employee.lastname.length <= 15 && isNaN(employee.lastname) == true ){
        last = true;
    }
    // firstname validation *need to exclude symbols
    if (employee.firstname.length >= 3 && employee.firstname.length <= 15 && isNaN(employee.firstname) == true ){
        first = true;
    }
    if (employee.middlename.length > 0 && isNaN(employee.middlename) == true){
        middle = true;
        console.log("middlename works" + employee.middlename);
    }
    // age validation
    if (isNaN(employee.age) == false) {
        if(employee.age >= 14 && employee.age <= 100){
            age = true;
        }
    }
    // salary validation
    if (isNaN(employee.salary) == false) {
        if(employee.salary >= 0 && employee.salary < 10000000000){
            salary = true;
        }
    }
    if (last == true && first == true && middle == true && age == true  && salary == true) {
         result = true;
     }
console.log("inside validator " + last + first + middle+ age + salary + result);
    return result;
};
