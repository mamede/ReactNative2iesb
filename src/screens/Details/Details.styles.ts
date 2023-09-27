import styled from 'styled-components/native';

export const Container = styled.View``;

export const BackgroundImage = styled.ImageBackground`
  height: 400px;
`;

export const Content = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 26px 16px;
  border-radius: 16px;
  background-color: #d9d9d9;
  height: 100%;
`;

export const Pricing = styled.Text`
  color: #28b446;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

export const ProductTitle = styled.Text`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
`;

export const ProductUnit = styled.Text`
  color: #868889;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.Text`
  color: #868889;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const AddToCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const AddToCartText = styled.Text`
  color: #868889;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  padding-left: 16px;
`;

export const ManageQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding-right: 16px;
`;

export const Remove = styled.TouchableOpacity``;
export const Add = styled.TouchableOpacity``;
