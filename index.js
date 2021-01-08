const inquirer = require("inquirer");
const fs = require("fs");

const arrayOfQuestions = [
    {
        type: "input",
        message: "Enter your name",
        name: "userName"
      },
      {
        type: "input",
        message: "Enter your location",
        name: "userLocation"
      },
      {
        type: "input",
        message: "Enter your professional bio",
        name: "userBio"
      },
      {
        type: "input",
        message: "Enter your linkedin",
        name: "userLinkedin"
      },
      {
        type: "input",
        message: "Enter your github",
        name: "userGithub"
      }
];

const htmlStringToWriteToFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTML Portfolio Page</title>
        <!-- CSS only -->
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
        />
    </head>

    <body>
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <h1 id="user-name">User Name</h1>
            <h3 id="user-location">User Location</h3>
            <h3 id="user-bio">User Bio</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur, dolores harum dolorem numquam est earum nulla veritatis
                consectetur voluptatibus assumenda, suscipit expedita. Quisquam
                voluptatibus mollitia fugiat laboriosam aut et aspernatur.
            </p>
            <button class="btn btn-primary btn-lg">
                <a id="user-linkedin" href="#" class="text-white">LinkedIn</a>
                </button>
            <button class="btn btn-primary btn-lg">
                <a id="user-github" href="#" class="text-white">Github</a>
                </button>
            </div>
        </div>
        </div>
    </body>
    </html>
`

function init() {
    console.log('function intialized');
    //returns a promise
    inquirer.prompt(arrayOfQuestions).them(response) => {
        console.log(response);
        fs.writeFile("portfolio.html", htmlStringToWriteToFile, (err) => {
            if(err){console.error(err)}
            else{console.log("succcess");}
        })
    }
}



