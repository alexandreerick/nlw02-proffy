import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  background: #8257E5;
  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #D4C2FF;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
  max-width: 240px;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 40px;
  background-color: #04D361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Archivo_700Bold';
`;