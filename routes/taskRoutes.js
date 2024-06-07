const express = require('express');
const {createtask,deletetask,getTaskById,updateTaskByid, getTasks} = require("../controllers/taskController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/createtask',authMiddleware,createtask)

router.delete('/deletetask/:taskId',authMiddleware,deletetask);

router.get('/gettask/:taskId',authMiddleware,getTaskById);

router.post('/updatetask/:taskId',authMiddleware,updateTaskByid);

router.get('/gettasks',authMiddleware,getTasks);

module.exports = router;