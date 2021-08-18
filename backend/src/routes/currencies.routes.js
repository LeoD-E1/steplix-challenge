const { Router } = require("express");
const router = Router();
import { getCurrencies } from "../controllers/currencies/getCurrencies";

router.get("/", getCurrencies);

export default router;
