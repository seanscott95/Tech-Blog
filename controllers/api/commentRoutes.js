const router = require('express').Router();
const { Comment } = require('../../models');

router.post("/", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.delete("/:id", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

module.exports = router;