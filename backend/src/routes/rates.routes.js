import { Router } from "express";
const router = Router();
import { getRates } from "../controllers/rates/getRates";
import { getRatesBySymbol } from "../controllers/rates/getRatesBySymbol";
import { postRates } from "../controllers/rates/postRates";

router.get("/", getRates);
router.get("/:symbol", getRatesBySymbol);
router.post("/", postRates);

export default router;
