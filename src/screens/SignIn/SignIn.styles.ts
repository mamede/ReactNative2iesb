import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  top: -15px;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  top: 12px;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  top: 10px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  position: absolute;
  font-size: 24px;
  color: red;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;
