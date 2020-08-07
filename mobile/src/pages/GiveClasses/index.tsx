import React from 'react';
import { View } from 'react-native';

import bgImage from '../../assets/images/give-classes-background.png';

import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Styled.Container>
      <Styled.ImageBackground source={bgImage} resizeMode="contain">
        <Styled.Title>Quer ser um Proffy?</Styled.Title>
        <Styled.Description>Para começar, você precisa se cadastrar como professor na nossa plataforma Web.</Styled.Description>
      </Styled.ImageBackground>

      <Styled.Button onPress={handleNavigateBack}>
        <Styled.TextButton>Tudo bem</Styled.TextButton>
      </Styled.Button>
    </Styled.Container>
  );
}

export default GiveClasses;