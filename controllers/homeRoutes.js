const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get("/", async (res, req) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));

        res.render('homepage', { posts });
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/dashboard", async (res, req) => {
    try {
        res.render('dashboard', { logged_in: req.session.logged_in });
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/login", async (res, req) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
          }
        
          res.render('login');
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.get("/post/:id", async (res, req) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['title', 'date_created'],
              },
            ],
          });
      
          const post = postData.get({ plain: true });
      
          res.render('dashboard', {
            ...post,
            logged_in: req.session.logged_in
          });
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

module.exports = router;