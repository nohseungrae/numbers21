import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import pressRoute from "./routes/pressRoute";
import mediaRoute from "./routes/mediaRoute";
import mailRoute from "./routes/mailRoute";

dotenv.config();
const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/press", pressRoute);
app.use("/api/media", mediaRoute);
app.use("/api/mail", mailRoute);
//------------------------------------
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.resolve(__dirname, "../../")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../index.html"));
  });
}
const port = process.env.PORT || 5000;
const handleListen = () => {
  console.log(`Listened on Server - PORT : ${port} `);
};
app.listen(port, handleListen);