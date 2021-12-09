
function fullName(firstName = "", lastName = ""){
    return (`${firstName} ${lastName}`)
}

let result = fullName("venkat","ravindra");

let expected = "venkatravindra";

let expectedOf = "ravindra"

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

if(result !== expectedOf){
    throw new Error(`${result} is not equal to ${expectedOf}`)
}