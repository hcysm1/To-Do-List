import express from "express";
import connection from "./database/db.js";
import cors from "cors";
import route from "./routes/route.js";

const app = express();

// CORS configuration
const corsOptions = {
  origin: "*", // Allow requests from all domains.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
const PORT = process.env.PORT || 8000;
connection();
app.listen(PORT, () =>
  console.log(`your server is running successfully on PORT ${PORT}`)
);
