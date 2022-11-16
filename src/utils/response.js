const successResponse = (res, message = "", data = {}) => {
    res.status(200).json({ error: false, message, data });
};

const badRequest = (res, message = "", data = {}) => {
    res.status(400).json({ error: true, message, data });
};

const internalServer = (res, message = "", data = {}) => {
    res.status(500).json({ error: true, message, data });
};

const pdfResponse = (res, data) => {
    res.set({
        "Content-Type": "application/pdf",
    });
    res.status(200).send(data);
};

export { successResponse, badRequest, internalServer, pdfResponse };
