import { Router } from "express";
import { addEvent, getEvent } from "../controllers/event.controllers.js";
const router=Router();
router.post("/addevent", addEvent);
router.get("/getevents",getEvent);

export default router;

