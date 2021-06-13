/*
User Routes
    
    User Routes holds all the routers pertaining to App Users. 

*/


const  express =  require("express");
const router = express.Router();
const UserCtrl = require('../controllers/user.controller');


router.get("/", UserCtrl.apiGetAllUsers);
router.post("/", UserCtrl.apiCreateUser);


module.exports =  router;