import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 4000);

// importing routes
import currencies from "./routes/currencies.routes";
import rates from "./routes/rates.routes";

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// using routes
app.use("/currencies", currencies);
app.use("/rates", rates);

export default app;
