import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { Image } from 'react-native';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Styled.Container>
      <Styled.ImageLanding source={landingImg} />

      <Styled.Title>
        Seja bem-vindo, {'\n'}
        <Styled.TitleBold>
          O que deseja fazer?
        </Styled.TitleBold>
      </Styled.Title>

      <Styled.ButtonsContainer>
        <Styled.Button primary onPress={handleNavigateToStudyPages}>
          <Styled.ButtonImage source={studyIcon} />

          <Styled.ButtonText>
            Estudar
          </Styled.ButtonText>
        </Styled.Button>

        <Styled.Button onPress={handleNavigateToGiveClassesPage}>
          <Styled.ButtonImage source={giveClassesIcon} />

          <Styled.ButtonText>
            Dar aulas
          </Styled.ButtonText>
        </Styled.Button>
      </Styled.ButtonsContainer>

      <Styled.TotalConnections>
        Total de 285 conexões já realizadas{' '}
        <Image source={heartIcon} />
      </Styled.TotalConnections>
    </Styled.Container>

  );
}

export default Landing;