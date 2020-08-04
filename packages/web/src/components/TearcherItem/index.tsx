import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TearcherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
          alt="Pedro Henrique"
        />
        <div>
          <strong>Pedro Henrique</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias no mundo do desenvolvimento web.
        <br />
        <br />
        Apaixonado por criar plataformas que vão mudar o mundo.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 35,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TearcherItem
