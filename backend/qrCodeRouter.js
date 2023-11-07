const express = require("express");
const qrRouter = express.Router();
const QRCode = require("qrcode");
const db = require("./db");

qrRouter.post(
  "/scanQrCode",

  (req, res) => {
    const url = req.body.url;
    if (url.length === 0) {
      res.send("empty Data");
    }
    const QRquery = "Insert into user_details(qr_Code) values(?)";
    db.query(QRquery, [url], (err, response) => {
      // Change variable name to 'response'
      if (err) {
        console.error("Error inserting data into the database: " + err.message);
        res.status(500).send("Error inserting data into the database");
      } else {
        console.log("The data is stored");
        QRCode.toDataURL(url, (err, imgurl) => {
          if (err) {
            console.error("Error generating QR code: " + err.message);
            res.status(500).send("Error generating QR code");
          } else {
            res.send(imgurl);
          }
        });
      }
    });
  }
);

module.exports = qrRouter;
