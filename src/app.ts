import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./api/routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/api", Router);

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`[APP]: listening on http://localhost:${port}`);
});
