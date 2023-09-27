import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AvatarContainer = styled.View`
  width: 49px;
  height: 49px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  border-top-width: 1px;
  border-top-color: #898989;
  width: 100%;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 600;
`;

export const Linking = styled.TouchableOpacity`
  color: #000;
  font-size: 18px;
  font-weight: 600;
`;
