const express = requier("express");
const app = express();
const cors = require("cors");

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
