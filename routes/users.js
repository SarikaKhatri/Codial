const express= require('express');
const router= express.Router();
const usersController= require('../controllers/Users_Conroller');
router.get('/profile',usersController.profile);
module.exports=router;