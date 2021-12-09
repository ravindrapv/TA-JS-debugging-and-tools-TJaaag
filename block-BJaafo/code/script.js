function fullName(firstname,secondname){
    return firstname + secondname;
}
let fullname = fullName("venkata","ravindra");

let expectedname = "venkataravindra";
if(fullname !== expectedname){
   throw Error(`${fullName} is not equel to ${expectedname}`);
}

function totalTex(amount,texrate){
    return amount+(amount*texrate);
}
let totaltex = totalTex(200,40);
let expected = 400;

if(totaltex !== expected){
    throw Error(`${totalTex} is not equal to ${expected}`);
}