import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcons from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Landing: React.FC = () => {
  return (
    <div id="page-lading">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Proffy" className="hero-image" />

        <div className="buttons-container">
          <a href="forever" className="study">
            <img src={studyIcons} alt="Estudar" />
            Estudar
          </a>

          <a href="forever" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          Total de 200 Conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing
