// do all database related things here

const create = async (payload) => {
    try {
        // any database query here
        return payload; // returning dummy value here
    } catch (err) {
        return err;
    }
};

export default {
    create,
};
