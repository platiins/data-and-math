// request a number, check if it is a number and if it is between 10 and 50

const userValue = prompt("please enter the number:");

if (userValue > 10 && userValue < 50) {
  console.log(`${userValue} is between 10 and 50`);
} else if (userValue <= 10) {
  console.error(`${userValue} is less than or equal to 10`);
} else if (userValue >= 50) {
  console.error(`${userValue} is greater than or equal to 50`);
}
