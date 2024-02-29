const express = require('express');
const { handleCreateNewUser,
    handleAllUsers,
    handleUpdateUser,
    handleDeleteUser,
    handleIndividualUser } = require('../controller/user');

const router=express.Router();

// router.route('/').get(handleAllUsers).post(handleCreateNewUser);
// router.route('/:id').get(handleIndividualUser).patch(handleUpdateUser).delete(handleDeleteUser);

router.post('/',handleCreateNewUser);
router.get('/',handleAllUsers);
router.delete('/:id',handleDeleteUser);
router.get('/:id',handleIndividualUser);
router.patch('/:id',handleUpdateUser);

module.exports=router;