const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/newPost", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/editPost:id", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

module.exports = router;