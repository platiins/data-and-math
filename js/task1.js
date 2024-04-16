// Rrequest a username and show a greeting using string template:

const userName = prompt("please enter your username:");

const stringUsername = userName + "";

document.body.innerHTML = `<h1>hello, ${stringUsername}!</h1>`;

// to check:
console.log(typeof convertUsername);
