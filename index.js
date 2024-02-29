const express=require('express');
const {handleDatabaseConnect}=require('./dbconnect');
const {User}=require("./models/userSchema");
const userRouter=require('./route/route');
const PORT=8001;


const app=express();
// Database Connection
handleDatabaseConnect('mongodb://127.0.0.1:27017/crude-app');

// app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Using route
app.use('/api/users/',userRouter);



// CRUD APP

// 1. Create 
// Restful api for creating new user
// app.post("/api/users/",async (req,res)=>{
//   const body=req.body;
//   console.log(body);
//     if(
//       !body ||
//       !body.firstName ||
//       !body.lastName ||
//       !body.email ||
//       !body.jobTitle
//     ){
//       res.status(400).json({msg:"All Fields Are Required."});
//     }
//     else{
//       const result=await User.create({
//           firstName:body.firstName,
//           lastName:body.lastName,
//           email:body.email,
//           jobTitle:body.jobTitle,
//       });
//       console.log('New user created with id',result.id);
//       res.status(201).json({msg:"Successfully Created New User."});
//     }
// });
// // 2. Read
// // api for returning all users
// app.get('/api/users/', async (req,res)=>{
//     // res.send({msg:"hello From Dipendra Server"});
//     const allUsers= await User.find({});
//     console.log(allUsers);
//     res.status(200).json(allUsers);
// });

// // 3.Update
// // api for update user by Id
// app.patch('/api/users/:id',async(req,res)=>{
//   const userId=req.params.id;
//   const body=req.body;
//   const changeName=body.firstName;
//   const result = await User.findByIdAndUpdate(userId,{firstName:changeName});
//   res.status(200).json({msg:"User Updated Successfully."});
// });

// // 4.DELETE
// // api for delete user by Id
// app.delete('/api/users/:id',async(req,res)=>{
//   const userId=req.params.id;
//   console.log(userId);
//   const deletedUser=await User.findByIdAndDelete(userId);
//   console.log(deletedUser);
//   res.status(200).json({msg:"User Deleted Successfully."});
// });

// // 5. SEARCH
// // api for returning particular user with id
// app.get('/api/users/:id',async(req,res)=>{
//   const userId=req.params.id;
//   console.log(userId);
//   const userData=await User.findById(userId);
//   console.log(userData);
//   res.status(200).json(userData);
// });

1
app.listen(PORT,()=>{console.log(`Server Started At ${PORT}.`)});
