const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});
