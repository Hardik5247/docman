import { Router } from "express";
import sampleRoutes from "../modules/sampleModule";
import pdfRoutes from "../modules/pdfGeneration";
import templateRoutes from "../modules/templateEditing";

const router = new Router();

// router.get('/health-check', (req, res) =>
//     res.send('OK')
// );

// mount test routes at /test
router.use("/test", sampleRoutes);

router.use("/pdf", pdfRoutes);
router.use("/template", templateRoutes);

export default router;
