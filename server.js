const express = require("express");
const app = express();
const PORT = 3000;
const albumsData = require("./album.json");

app.use(express.json());

app.get("/albums", function (request, response) {
  response.send(albumsData);
  console.log("Request to get all albums");
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});
