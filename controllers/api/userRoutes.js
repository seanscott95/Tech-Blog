const router = require('express').Router();
const { User } = require('../../models');

router.get("/", async (res, req) => {
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

router.get("/logout", async (res, req) => {
    try {
        res.statusCode(200);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});