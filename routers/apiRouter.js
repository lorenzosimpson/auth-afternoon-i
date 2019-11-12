const router = require('express').Router()
const userRouter = require('./userRouter')
const registerRouter = require('./registerRouter');
const loginRouter = require('./loginRouter')
const logoutRouter = require('./logoutRouter')

router.use('/users', userRouter)
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/logout', logoutRouter)

module.exports = router;