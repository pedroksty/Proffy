import { Request, Response } from 'express'

import db from '../database/connection'

class ConnectionController {
  async store(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body

    await db('connections').insert({
      user_id
    })

    return response.status(201).send()
  }

  async index(request: Request, response: Response): Promise<Response> {
    const totalConnections = await db('connections').count('* as total')

    const { total } = totalConnections[0]

    return response.json({ total })
  }
}

export default new ConnectionController()
