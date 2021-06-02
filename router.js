const router = require('express').Router();

const userRouter = require('./routes/userRouter');
const chatRouter = require('./routes/chatRouter');
const privateroomRouter = require('./routes/privateroomRouter');

router.use('/user', userRouter);
router.use('/chat', chatRouter);
router.use('/privateroom', privateroomRouter)

module.exports = router ;