import { Router } from "express";
import { addprof } from "../controllers/prof.controllers.js";

const router = Router();

router.post("/addprofdetails", addprof);

export default router;