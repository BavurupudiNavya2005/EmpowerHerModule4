import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

console.log(
  boxen(message, { title })
);

console.log(
  boxen(message, { title, borderStyle: "singleDouble" })
);

console.log(
  boxen(message, { title, borderStyle: "round" })
);