import express from 'express'
import authenticationRouter from './authentication'
import itemsRouter from './items.route'
import inventoriesRouter from './inventories.route'
import usersRoute from './users.route'
import videosRouter from './videos.route'

const router = express.Router()

export default function setupRoutes(): express.Router {
    authenticationRouter(router)
    usersRoute(router)
    itemsRouter(router)
    inventoriesRouter(router)
    videosRouter(router)
    return router
}
