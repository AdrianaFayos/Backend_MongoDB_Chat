const router = require('express').Router();
const chatController = require('../controllers/privateroomController');

// GET - Return all private chats

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



module.exports = router;
