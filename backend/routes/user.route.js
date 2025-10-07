import express from 'express'
import { login, register } from '../controllers/user.controller.js';

const router = express.Router()



// @route POST /api/user/register 
// @desc create new User 
// @access - 
// @authentication Required
router.post('/register', register)


// @route POST /api/user/login 
// @desc logged In the existing User 
// @access - 
// @authentication Required
router.post('/login', login)

export default router;