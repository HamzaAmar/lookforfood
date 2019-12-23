import "dotenv/config";
import express from "express";
import cors from "cors";

const { PORT } = process.env;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
