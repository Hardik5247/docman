import { readFile } from "fs/promises";
import { join } from "path";
import config from "../config"
import Handlebars from "handlebars";

/** 
 * Example of handlebars if statement with below mentioned helpers:
 * {{ #if (OR (EQ section1 "foo") (NE section2 "bar")) }} .. content {{ /if }}
 */

Handlebars.registerHelper({
    EQ: (v1, v2) => v1 === v2,
    NE: (v1, v2) => v1 !== v2,
    LT: (v1, v2) => v1 < v2,
    GT: (v1, v2) => v1 > v2,
    LTE: (v1, v2) => v1 <= v2,
    GTE: (v1, v2) => v1 >= v2,
    AND() {
        return Array.prototype.every.call(arguments, Boolean);
    },
    OR() {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
});

Handlebars.registerHelper('equalsHelper', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

const generateHtml = async (data, templateId) => {
    try {
        const fileName = join(
            __dirname,
            `../../assets/templates/${templateId}.html`
        );
        const fileContents = await readFile(fileName, { encoding: "utf-8" });
        
        let html = await generateHtmlHelper(data, fileContents);
        return html;
    } catch (error) {
        throw Error(error);
    }
};

const generateHtmlHelper = async (data, fileContents) => {
    try {
        let template = Handlebars.compile(fileContents);
        
        data["resourcePath"] = config.RESOURCE_PATH;
v
        let html = template(data);
        return html;
    } catch (error) {
        throw Error(error);
    }
};

export { generateHtml, generateHtmlHelper };
