import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import * as Styled from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Styled.Article>
    <header>
      <img src="https://avatars2.githubusercontent.com/u/38448495?s=460&u=0b4da32f9a5733597b192c80d4795deff9853cbe&v=4" alt="Erick Alexandre"/>
      <div>
        <strong>Erick Alexandre</strong>
        <span>Inglês</span>
      </div>
    </header>

    <p>
      Entusiasta em fazer as pessoas a não aprenderem inglês corretamente!
        <br /> <br />
      Adoro fazer as pessoas perderem o tempo delas achando que sei algo de inglês quando na verdade, a única coisa que eu sei sobre inglês é "I love you".
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp icon"/>
        Entrar em contato.
      </button>
    </footer>
  </Styled.Article>
  );
}

export default TeacherItem;