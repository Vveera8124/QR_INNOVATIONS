import React, { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import "./QrCode.css";
import axios from "axios";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState("");
  const generateQrcode = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/scanQrCode", { url: url })
      .then((response) => {
        console.log(response);
        setQrImage(response.data);
      });
  };
  return (
    <div>
      <Container className="Container">
        <h2 className="Title">Generating the QR Code</h2>
        <Card>
          <CardContent>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField
                label="Enter You Url"
                variant="outlined"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              <Button
                className="btn"
                variant="contained"
                color="primary"
                onClick={generateQrcode}
                sx={{ margin: "10px" }}
              >
                Generate QR Code
              </Button>
              <br />
            </Grid>
            <Grid
              className="qrCode"
              sx={{ border: "4px solid purple", margin: "4px" }}
              item
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
            >
              {url.length > 0 && qrImage ? (
                <a>
                  <img src={qrImage} alt="qrImage" />
                </a>
              ) : null}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default QrCode;
