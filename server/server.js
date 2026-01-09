const express = require("express");
const PORT = 5000;
const app = express();

app.listen(PORT, () => {
  console.dir(`Server is running on port ${PORT}`);
});
