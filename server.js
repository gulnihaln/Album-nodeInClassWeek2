const express = require("express");
const app = express();
const PORT = 3000;
const albumsData = require("./album.json");

app.use(express.json());

app.get("/albums", function (request, response) {
  response.send(albumsData);
  console.log("Request to get all albums");
});

app.get("/albums/:albumId", function (request, response) {
  const albumID = request.params.albumId;
  const selectedAlbum = albumsData.filter((album) => album.albumId === albumID);
  response.send(selectedAlbum);
//   response.send(request.params.albumId + request.query.key);
  console.log("Request to get one albums");
});   

app.post("/albums", function (request, response) {
  const newAlbum = request.body;
  albumsData.push(newAlbum);
  response.send("successful");
});

app.delete("/albums/:albumID", function (req, res) {
  const index = albumsData.findIndex(
    (album) => album.albumId === req.params.albumId
  );
  albumsData.splice(index, 1);
  res.send("Delete is successful");
  console.log("DELETE /albums route");
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});
