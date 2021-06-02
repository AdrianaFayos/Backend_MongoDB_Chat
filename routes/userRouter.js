const router = require('express').Router();

const userController = require('../controllers/userController');

// GET - Return all users

router.get('/', async(req, res) => {
    try {
        res.json(await userController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// POST - Create new user

router.post('/', async(req, res) => {
    try {
        const user = req.body;
        res.json(await userController.createUser(user))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;