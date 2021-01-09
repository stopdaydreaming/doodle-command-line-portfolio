const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");

const arrayOfQuestions = [
  {
    type: "input",
    message: "Enter your name",
    name: "name"
  },
  {
    type: "input",
    message: "Enter your location",
    name: "location"
  },
  {
    type: "input",
    message: "Enter your professional bio",
    name: "bio"
  },
  {
    type: "input",
    message: "Enter your linkedin",
    name: "linkedin"
  },
  {
    type: "input",
    message: "Enter your github",
    name: "github"
  }
];

function init() {
  console.log("function intialized");
  //returns a promise
  inquirer.prompt(arrayOfQuestions).then(response => {
    console.log(response);
    const dynamicString = generateHTML(response);
    fs.writeFile("portfolio.html", dynamicString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("succcess");
      }
    });
  });
}

init();