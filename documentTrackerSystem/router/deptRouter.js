const express = require('express');
const { getAllDepartments, createDepartment, 
        updateDepartment, deleteDepartment } = require('../controller/deptController');
const { isAdmin } = require('../middlewares/roles.middleware');
const { createRoleForStaff } = require('../controller/rolesController');
const { protect } = require('../middlewares/auth.middleware');

const deptRouter = express.Router();

deptRouter.get('/department',  protect, isAdmin, getAllDepartments);

deptRouter.post('/department', createDepartment);

deptRouter.patch('/department', updateDepartment);

deptRouter.delete('/department', deleteDepartment);

deptRouter.post('/dept', isAdmin, (req, res) => {
        res.send('I am an Admin')
});

deptRouter.patch('/dept', createRoleForStaff)

module.exports = deptRouter;
