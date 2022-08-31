/*
const {Router } = require('express');
const authController = require('../controllers/authController')
*/


import {Router} from 'express'
import authController from '../controllers/authController.js'


const authRoute = Router();

authRoute.post('/register', authController.register)
authRoute.post('/login', authController.login)


export default authRoute