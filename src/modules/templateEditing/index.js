import { Router } from "express";
import templateEditingController from "./templateEditingController";

const router = new Router();

router.post("/edit", templateEditingController.edit);
router.post("/to/html", templateEditingController.html);

export default router;

//TODO: payload validations/authentication middleware