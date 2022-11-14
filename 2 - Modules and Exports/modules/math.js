
function multiply(number1,number2){
    let answer = number1*number2;
    return answer;
};

function add(number1,number2){
    let answer = number1+number2;
    return answer;
};

function subtract(number1,number2){
    let answer = number1-number2;
    return answer;
};

function divise(number1,number2){
    let answer = number1/number2;
    return answer;
};

exports.multiply = multiply;
exports.add = add;
exports.subtract = subtract;
exports.divise = divise;