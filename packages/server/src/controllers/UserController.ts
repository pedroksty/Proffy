import { Request, Response } from 'express'
import db from 'src/database/connection'
import convertHoursToMinute from 'src/utils/convertHoursToMinute'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

class UserController {
  async store(request: Request, response: Response): Promise<any> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body

    const insertedUserIds = await db('users')
      .insert({
        name,
        avatar,
        bio,
        whatsapp
      })
      .returning('*')

    const user_id = insertedUserIds[0].id
    const insertedClassId = await db('classes')
      .insert({
        subject,
        cost,
        user_id
      })
      .returning('*')

    const class_id = insertedClassId[0].id

    const classSchdule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHoursToMinute(scheduleItem.from),
        to: convertHoursToMinute(scheduleItem.to)
      }
    })

    const insertedClass = await db('class_schedule')
      .insert(classSchdule)
      .returning('*')

    return response.json({ insertedUserIds, insertedClassId, insertedClass })
  }

  async index(request: Request, response: Response): Promise<any> {}

  async show(request: Request, response: Response): Promise<any> {}

  async update(request: Request, response: Response): Promise<any> {}

  async delete(request: Request, response: Response): Promise<any> {}
}

export default new UserController()
