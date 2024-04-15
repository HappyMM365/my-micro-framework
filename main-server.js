import express from "express";
import config from "./config.js";

const app = express();

const { port, host } = config;

app.use(morgan("dev"));
app.use(express.static(path.join("public", "main")));

app.post("/microapps", function (req, res) {
  res.json([
    {
      name: "microapp1",
      id: "micro1",
      script: `http://${host}:${port.micro}/micro1.js`,
      style: `http://${host}:${port.micro}/micro1.css`,
      mount: "micro1_mount",
      unmount: "micro1_unmount",
      prefetch: true,
    },
    {
      name: "micro2",
      id: "micro2",
      script: `http://${host}:${port.micro}/micro2.js`,
      style: `http://${host}:${port.micro}/micro2.css`,
      mount: "micro2_mount",
      unmount: "micro2_unmount",
      prefetch: true,
    },
  ]);
});

app.listen(port.main, host);
console.log(`server start at http://${host}:${port.main}/`);
