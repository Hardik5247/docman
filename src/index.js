import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import routes from "./config/route";
import logger from "./core/logger";

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// secure apps by setting various HTTP headers
app.use(helmet({ crossOriginResourcePolicy: false, }));

// request logging. dev: console | production: file
app.use(morgan("combined"));

app.use('/images', express.static(path.join(__dirname, '../assets/images')));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

logger.info(`NODE_ENV=${config.NODE_ENV}`);

app.get("/", (req, res) => {
    res.send("Hello World !!");
});

// mount all routes on /api path
app.use("/api", routes);

app.listen(config.PORT, config.HOST, () => {
    logger.info(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});

export default app;
