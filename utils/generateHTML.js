const generateHTML = (data) => {
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
              <h1 id="user-name">${data.name}</h1>
              <h3 id="user-location">${data.location}</h3>
              <h3 id="user-bio">${data.bio}</h3>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur, dolores harum dolorem numquam est earum nulla veritatis
                  consectetur voluptatibus assumenda, suscipit expedita. Quisquam
                  voluptatibus mollitia fugiat laboriosam aut et aspernatur.
              </p>
              <button class="btn btn-primary btn-lg">
                  <a id="user-linkedin" href="${data.linkedin}" class="text-white">LinkedIn</a>
                  </button>
              <button class="btn btn-primary btn-lg">
                  <a id="user-github" href="${data.github}" class="text-white">Github</a>
                  </button>
              </div>
          </div>
          </div>
      </body>
      </html>
  `;
    return htmlStringToWriteToFile;
  };

  module.exports = generateHTML;