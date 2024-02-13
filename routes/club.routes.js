import { Router } from "express";
import { addClub,getClub} from "../controllers/club.controllers.js";

const router = Router();

router.post("/addclubdetails", addClub);
router.get("/getclubdetails",getClub);

export default router;
