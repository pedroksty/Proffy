import React from 'react'

import Pageheader from '../../components/Pageheader'
import TearcherItem from '../../components/TearcherItem'
import Input from '../../components/Input'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Pageheader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Máteria" />
          <Input name="week_day" label="Dia da semana" />

          <Input type="time" name="time" label="hora" />
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
