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
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        bio,
        whatsapp
      })

      const user_id = insertedUserIds[0]
      const insertedClassId = await trx('classes').insert({
        subject,
        cost,
        user_id
      })

      const class_id = insertedClassId[0]

      const classSchdule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinute(scheduleItem.from),
          to: convertHoursToMinute(scheduleItem.to)
        }
      })

      await trx('class_schedule').insert(classSchdule)

      await trx.commit()

      return response.status(201).send()
    } catch (err) {
      await trx.rollback()
      console.log(err)
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }

  async index(request: Request, response: Response): Promise<any> {
    const filters = request.query

    const subject = filters.subject as string
    const week_day = filters.week_day as string
    const time = filters.time as string

    if (!filters.subject || !filters.week_day || !filters.time) {
      return response.json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHoursToMinute(time)

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return response.json(classes)
  }

  async show(request: Request, response: Response): Promise<any> {}

  async update(request: Request, response: Response): Promise<any> {}

  async delete(request: Request, response: Response): Promise<any> {}
}

export default new UserController()
