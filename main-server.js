// main-server.js
import express from "express";
import path from "path";
import morgan from "morgan";
import config from "./config.js";

const app = express();

const { port, host } = config;

app.use(morgan("dev"));

app.use(express.static(path.join("public", "main")));

//主服务 对外提供 子应用 信息数据
app.post("/microapps", (req, res) => {
  //动态微服务数据信息
  // {name id script文件地址 style文件地址 mount 微应用启动函数 prefetch }
  res.json([
    {
      name: "micro1",
      id: "micro1",
      script: `http://${host}:${port.micro}/micro1.js`,
      style: `http://${host}:${port.micro}/micro1.css`,
      // 挂载到 window 上的启动函数 window.micro1_mount
      mount: "micro1_mount",
      // 挂载到 window 上的启动函数 window.micro1_unmount
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
