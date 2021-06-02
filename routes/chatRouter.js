const router = require('express').Router();

const chatController = require('../controllers/chatController');

// GET - Return all chats

router.get('/', async(req, res) => {
    try {
        res.json(await chatController.findAllChats())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// POST - Create new chat

router.post('/', async(req, res) => {
    try {
        const chat = req.body;
        res.json(await chatController.createChat(chat))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// POST - Join the chat

router.post('/join', async(req, res) => {
    try {
        const data = req.body;
        res.json(await chatController.joinChat(data))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// POST - Leave the chat

router.post('/leave', async(req, res) => {
    try {
        const data = req.body;
        res.json(await chatController.leaveChat(data))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// POST - Add message

router.post('/addmessage', async(req, res) => {
    try {
        const data = req.body;
        res.json(await chatController.addMessage(data))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// POST - Delete one chat

router.post('/deletechat', async(req, res) => {
    try {
        const id = req.body;
        res.json(await chatController.deleteChat(id))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})




module.exports = router;
