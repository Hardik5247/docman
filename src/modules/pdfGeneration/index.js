import { Router } from "express";
import pdfGenerationController from "./pdfGenerationController";

const router = new Router();

router.post("/generate", pdfGenerationController.generatePdf);

export default router;

//TODO: payload validations/authentication middleware
