const inquirer = require("inquirer");
const fs = require("fs");
// const myHTML = `
// <html>
// <body>
// <h1>hello world</h1>
// </body>
// </html>
// `;

inquirer
  .prompt([
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
  ])
  .then(response =>
    fs.writeFile("portfolio.html", generateHTML(response), err =>
      err ? console.log(err) : console.log("it worked")
    )
  );

function generateHTML(response) {
  return
  `<!DOCTYPE html>
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
            <h1 id="user-name">${response.userName}</h1>
            <h3 id="user-location">${response.userLocation}</h3>
            <h3>User Bio</h3>
            <p id="user-bio">
            ${response.userBio}
            </p>
            <button class="btn btn-primary btn-lg">
                <a id="user-linkedin" href="${response.userLinkedin}" class="text-white">LinkedIn</a>
                </button>
            <button class="btn btn-primary btn-lg">
                <a id="user-github" href="${response.userGithub}" class="text-white">Github</a>
                </button>
            </div>
        </div>
        </div>
    </body>
    </html>
  `;
}

