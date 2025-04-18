import express from 'express'
import { deleteUser, getAllUsers, updateUser,getUserPostGres } from '../controllers/users'
import { isAuthenticated, isOwner } from '../middlewares'

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers)
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser)
    router.put('/users/:id', isAuthenticated, isOwner, updateUser)
    router.get('/users/test', getUserPostGres)
}
