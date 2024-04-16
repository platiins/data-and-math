// request a number and check if it is an odd number

const numFromUser = prompt("please enter the number to check if it is odd");

if (Number(numFromUser) === 0) {
  console.warn(`${numFromUser} is 0`);
} else if (Number(numFromUser) % 2 === 0) {
  console.error(`${numFromUser} is even`);
} else if (Number(numFromUser) % 2 !== 0) {
  console.log(`${numFromUser} is odd`);
}
