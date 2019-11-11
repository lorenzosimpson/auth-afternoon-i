const router = require('express').Router()
const userRouter = require('./userRouter')
const registerRouter = require('./registerRouter');

router.use('/users', userRouter)
router.use('/register', registerRouter)

module.exports = router;