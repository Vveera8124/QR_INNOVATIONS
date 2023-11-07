const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const qrRouter = require("./qrCodeRouter");

app.use(express.json());
app.use(cors());
app.use("/api", qrRouter);

app.listen(port, () => {
  console.log(`server is running on port  ${port}`);
});
