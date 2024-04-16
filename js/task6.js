// request date of birth, calculate age and show if the person is over 18

const userDOB = prompt("please enter your date of birth:");
const adultAge = 18;

let userAge = 2024 - Number(userDOB);
console.log(userAge);

if (userAge === adultAge) {
  console.log("you are 18 years old");
} else if (userAge < adultAge) {
  console.log("you are under 18 years old");
} else if (userAge > adultAge) {
  console.log("you are over 18 years old");
}
