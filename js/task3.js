//request a color and check if the color is on the flag of the Republic of South Africa

const colorFromUser = prompt(
  "please enter the color to check if it is on the flag of the Republic of Sounth Africa"
);

const checkColor = colorFromUser.toLowerCase().trim();

if (
  checkColor === "red" ||
  checkColor === "blue" ||
  checkColor === "black" ||
  checkColor === "green" ||
  checkColor === "yellow" ||
  checkColor === "white"
) {
  console.log(`yes, ${checkColor} is on the flag`);
} else {
  console.error(`no, ${checkColor} is not on the flag`);
}
