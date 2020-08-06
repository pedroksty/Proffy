import React, { useState, FormEvent } from 'react'

import Pageheader from '../../components/Pageheader'
import TearcherItem, {
  Teacher as TeacherProps
} from '../../components/TearcherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'
import api from '../../services/api'

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const [teachers, setTeachers] = useState([])

  async function searchTearchers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <Pageheader title="Esses são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTearchers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Português', label: 'Português' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Matemática', label: 'Matemática' }
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => {
              setWeekDay(e.target.value)
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feita' },
              { value: '2', label: 'Terça-feita' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feita' },
              { value: '5', label: 'Sexta-feita' },
              { value: '6', label: 'Sábado' }
            ]}
          />

          <Input
            type="time"
            name="time"
            label="hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </Pageheader>

      <main>
        {teachers.map((teacher: TeacherProps) => {
          return <TearcherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList
