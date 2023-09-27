import express from 'express'
import { getAllRole, createRole } from '../Controller/roleController.js'
// import Role from '../Controller/roleController.js'

const RoleRouter = express.Router()

RoleRouter.post("/add-role", createRole)
RoleRouter.get("/get-role",getAllRole)

export default RoleRouter