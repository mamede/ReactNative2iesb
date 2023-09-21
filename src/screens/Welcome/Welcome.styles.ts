import styled from 'styled-components/native';

export const Container = styled.View``;

export const BackgroundContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  top: 10px;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  background: #f4f5f9;
  padding: 32px 16px 40px;
  border-radius: 10px 10px 0 0;
`;

export const Title = styled.Text`
  font-family: 'Poppins';
  color: #000;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  color: #868889;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 28px;
`;

export const ButtonContainer = styled.View`
  gap: 12px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  height: 60px;
  padding: 0 12px;
  background-color: red;
  color: white;
  width: 100%;
  border-radius: 10px;
  margin: 0;
  opacity: 1;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const FooterText = styled.Text`
  color: #868889;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;

export const FooterLinkContainer = styled.TouchableOpacity``;
export const FooterLink = styled.Text`
  color: #ff6b6c;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin-left: 8px;
`;
