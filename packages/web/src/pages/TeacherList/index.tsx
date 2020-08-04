import React from 'react'

import Pageheader from '../../components/Pageheader'
import TearcherItem from '../../components/TearcherItem'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Pageheader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Pageheader>

      <main>
        <TearcherItem />
        <TearcherItem />

        <TearcherItem />
        <TearcherItem />
        <TearcherItem />
      </main>
    </div>
  )
}

export default TeacherList
