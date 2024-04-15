import ip from "ip";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const host = ip.address();
app.use(express.static(path.join(__dirname, "public")));

app.listen(4444, host);
