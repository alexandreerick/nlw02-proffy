import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import * as Styled from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Styled.Container>
      <Styled.TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Styled.BackIcon source={backIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Styled.LogoImg source={logoImg} resizeMode="contain" />
      </Styled.TopBar>

      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
}

export default PageHeader;