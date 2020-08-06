import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import * as Styled from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      setTotalConnections(response.data.total);
    })
  }, [])

  return (
    <Styled.PageLanding>
        <Styled.PageLandingContent id="landing-content" className="container">
          <Styled.LogoContainer>
            <img src={logoImg} alt="Proffy"/>
            <h2>Sua plataforma de estudos online.</h2>
          </Styled.LogoContainer>
          <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
          />

          <Styled.ButtonsContainer>
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar"/>
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas"/>
              Dar aulas
            </Link>
          </Styled.ButtonsContainer>

          <Styled.TotalConnections>
            Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
          </Styled.TotalConnections>
        </Styled.PageLandingContent>
    </Styled.PageLanding>
  );
}

export default Landing;