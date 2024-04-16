/* request names and ages for two children; 
check if child 1 is older and if its name is Tim */

// first child
let firstChildName = prompt("please enter name of the first child:");
let firstChildAge = prompt("please enter age of the first child:");

const ChildName1st = firstChildName.trim();

// second child
let secondChildName = prompt("please enter name of the second child:");
let secondChildAge = prompt("please enter age of the second child:");

const childNameTim = "Tim";

if (firstChildAge > secondChildAge) {
  console.log("first child is older than the second one");
} else {
  console.error("first child is younder than the second one");
}

if (ChildName1st === childNameTim) {
  console.log("the first child name is Tim");
} else {
  console.error("the name of the first child is not Tim");
}
