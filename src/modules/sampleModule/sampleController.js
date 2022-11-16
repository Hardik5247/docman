import sampleService from "./sampleService";

// do all data sanitizing,and response modification in this.

const create = async (req, res) => {
    try {
        const response = await sampleService.create(req.body);
        return res.json(response); // TODO: need to fix response format
    } catch (err) {
        return err; // TODO: need to fix error format
    }
};

export default {
    create,
};
