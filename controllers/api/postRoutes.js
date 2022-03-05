const router = require('express').Router();
const { Post } = require('../../models');

router.post("/", async (req, res) => {
    try {;
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;