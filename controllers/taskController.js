const {Task} = require('../models/index');


const createtask =  async (req,res,next)=>{
   try{
      const {userId,email} = req.userData;
    const {title,description} = req.body;

    const task =await Task.create({
        title,
        description,
        userId
        });
    if(task){
        res.status(201).json({
            "message":"Task created successfully"
        });
    }
    else{
        res.status(500).json({
            "message":"Task not created"
        });
    }
   }catch(error){
      console.log("some error occured",error);
      res.status(500).json({
        "message":"Something went wrong"
      });
   }
} 

const deletetask = async (req,res,next) =>{
  try{
    const {userId} = req.userData;
    const {taskId} =req.params;
    const task = await Task.destroy({
        where:{
            id:taskId,
            userId:userId
        }});
    if(task === 1){
        res.status(200).json({
            "message":"Task deleted successfully"
        });
    }
    else{
        res.status(500).json({
            "message":"Task not deleted"
        });
    }
  }catch(error){
    console.log("some error occured",error);
    res.status(500).json({
      "message":"Task not deleted successfully"
    });
  }
}


const getTaskById = async (req,res,next) =>{
     try{
    const {userId} = req.userData;
      const {taskId} = req.params;
      const task = Task.findOne({
        where:{
            id:taskId,
            userId:userId
        }
      })
      if(task){
        res.status(200).json({
          "task":task
        });
      }
      else{
        res.status(404).json({
          "message":"Task not found"
        });
      }
     }catch(error){
        console.log("some error occured",error);
        res.status(500).json({
          "message":"Task not found"
        });

      }
      //  getTask = [[[1,'taksone','somedescription ...'],[]]]
}

const updateTaskByid = async (req,res,next) =>{
   try{
    const {userId} = req.userData;
    const {taskId} = req.params;
    const {title,description} = req.body;
    const task = await Task.update({
        title,
        description
    },{
        where:{
            id:taskId,
            userId:userId
        }
    });
    if(task === 1){
        res.status(200).json({
            "message":"Task updated successfully"
        });
    }
    else{
        res.status(500).json({
            "message":"Task not updated"
        });
    }
   
  }catch(error){
      console.log("some error occured",error);
      res.status(500).json({
        "message":"Task not updated"
      });
   
   }
}

const getTasks = async (req,res,next) =>{
  try{
    const {userId} = req.userData;
    const tasks = await Task.findAll({
      where:{
        userId:userId
      }
    });
    if(tasks.length > 0){
      res.status(200).json({
        "tasks":tasks
      });
    }
    else{
      res.status(404).json({
        "message":"Tasks not found"
      });
    }
  }catch(error){
    console.log("some error occured",error);
    res.status(500).json({
      "message":"Tasks not found"
    });
  }
}

module.exports = {createtask,deletetask,getTaskById,updateTaskByid,getTasks}