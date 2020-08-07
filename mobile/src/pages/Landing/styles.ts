import styled from 'styled-components/native';

interface Props {
  primary?: boolean;
}

export const Container = styled.View`
  flex:1;
  justify-content: center;
  background: #8257E5;
  padding: 40px;
`;

export const ImageLanding = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<Props>`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  background-color: ${props => props.primary ? '#9871F5' : '#04D361'};
`;

export const ButtonImage = styled.Image``;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #D4C2FF;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;


