import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ SERVER: 'ON' })
})

routes.post('/classes', UserController.store)

export default routes
