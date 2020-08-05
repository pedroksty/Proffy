import { Router } from 'express'
import UserController from './controllers/UserController'
import ConnectionController from '@controllers/ConnectionController'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ SERVER: 'ON' })
})

routes.post('/classes', UserController.store)
routes.get('/classes', UserController.index)

routes.post('/connections', ConnectionController.store)
routes.get('/connections', ConnectionController.index)

export default routes
