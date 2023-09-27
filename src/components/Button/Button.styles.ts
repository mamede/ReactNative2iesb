import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  gap: 12px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  padding: 0 48px;
  background: #6cc51d;
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
  margin-left: 72px;
`;
