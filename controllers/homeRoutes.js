const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get("/", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/dashboard", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/login", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/post:id", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

module.exports = router;