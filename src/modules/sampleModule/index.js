import { Router } from "express";
import sampleController from "./sampleController";

const router = new Router();

router.post("/create", sampleController.create);

export default router;

//TODO: payload validations

// const validate = require('express-validation');
// const paramValidation = require('../../config/param-validation');

// router.route('/')
//   /** GET /api/users - Get list of users */
//   .get(userCtrl.list)

//   /** POST /api/users - Create new user */
//   .post(validate(paramValidation.createUser), userCtrl.create);

// router.route('/:userId')
//   /** GET /api/users/:userId - Get user */
//   .get(userCtrl.get)

//   /** PUT /api/users/:userId - Update user */
//   .put(validate(paramValidation.updateUser), userCtrl.update)

//   /** DELETE /api/users/:userId - Delete user */
//   .delete(userCtrl.remove);

// /** Load user when API with userId route parameter is hit */
// router.param('userId', userCtrl.load);
