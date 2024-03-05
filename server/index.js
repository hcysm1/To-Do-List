import express from "express";
import connection from "./database/db.js";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
const PORT = 8000;
connection();
app.listen(PORT, () =>
  console.log(`your server is running successfully on PORT ${PORT}`)
);
