const {User} = require('../models/userSchema');
const express=require('express');

// Create New User
const handleCreateNewUser = async (req, res) => {
    const body = req.body;
    console.log(body);
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.jobTitle
    ) {
        res.status(400).json({ msg: "All Fields Are Required." });
    }
    else {
        const result = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            jobTitle: body.jobTitle,
        });
        console.log('New user created with id', result.id);
        res.status(201).json({ msg: "Successfully Created New User." });
    }


}

// Getting all Users
const handleAllUsers=async(req,res)=>{
    const result=await User.find({});
    res.status(200).json(result);
}
// Update User By Id
const handleUpdateUser=async(req,res)=>{
    const userId=req.params.id;
    const updatableName=req.body.firstName;
    await User.findByIdAndUpdate(userId,{firstName:updatableName});
    res.status(200).json({msg:"User Updated Successfully"});
}

// Delete By userId
const handleDeleteUser=async(req,res)=>{
    const delId=req.params.id;
    await User.findByIdAndDelete(delId);
    res.status(200).json({msg:"User Deleted Successfully"});
}

// Getting User By Id
const handleIndividualUser=async(req,res)=>{
    const userId=req.params.id;
    const result=await User.findById(userId);
    res.status(200).json(result);
}

module.exports={
    handleCreateNewUser,
    handleAllUsers,
    handleUpdateUser,
    handleDeleteUser,
    handleIndividualUser,
}