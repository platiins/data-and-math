// request two numbers, divide them and the result must be an integer

const firstNum = prompt("please enter the first number:");

const secondNum = prompt("please enter the second number:");

let result = parseInt(firstNum / secondNum);

document.body.innerHTML = `<h3>result of dividing provided values is ${result}</h3>`;
console.log(result);
