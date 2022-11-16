import { editHelper } from "../../utils/templateEditingUtility";
import { generateHtmlHelper } from "../../utils/htmlTemplatingUtility";
import { internalServer, successResponse } from "../../utils/response";

const edit = async (req, res) => {
    try {
        const payload = req.body.payload;
        const templateId = req.body.templateId;
        const newTemplate = await editHelper(payload, templateId);
        return successResponse(res, "", newTemplate);
    } catch (err) {
        console.log(err);
        return internalServer(res, "Internal Server Error");
    }
};

const html = async (req, res) => {
    try {
        const payload = req.body.payload;
        let template = req.body.template;
        const file = await generateHtmlHelper(payload, template);
        return res.status(200).send(file)
    } catch (err) {
        console.log(err);
        return internalServer(res, "Internal Server Error");
    }
};

export default {
    edit,
    html
};