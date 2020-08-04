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

    const trx = await db.transaction()

    try {
      const insertedUserIds = await trx('users')
        .insert({
          name,
          avatar,
          bio,
          whatsapp
        })
        .returning('*')

      const user_id = insertedUserIds[0].id
      const insertedClassId = await trx('classes')
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

      const insertedClass = await trx('class_schedule')
        .insert(classSchdule)
        .returning('*')

      await trx.commit()

      return response.json({ insertedUserIds, insertedClassId, insertedClass })
    } catch (err) {
      await trx.rollback()
      console.log(err)
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }

  async index(request: Request, response: Response): Promise<any> {}

  async show(request: Request, response: Response): Promise<any> {}

  async update(request: Request, response: Response): Promise<any> {}

  async delete(request: Request, response: Response): Promise<any> {}
}

export default new UserController()
