import React, {useEffect, useState} from 'react';

// COMPONENTS
import {Header} from '@components/Header/Header';
import {ButtonComponent} from '@components/Button/Button';

// ATOM
import {cartTotalQuantity, cartItems, cartTotal} from '@atom/store';
import {useAtom} from 'jotai';

// ICON
import ShoppingIcon from '@assets/icons/shopping.svg';

// STYLES
import * as S from './Shopping.styles';
import {usePostOrder} from '@services/Products/PostOrder';
import {Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type ShoppingSteps = 0 | 1 | 2;

function Shopping() {
  const [step, setStep] = useState<ShoppingSteps>(0);
  const [totalQuantity] = useAtom(cartTotalQuantity);
  const [total] = useAtom(cartTotal);
  const [items, setItems] = useAtom(cartItems);
  const navigation = useNavigation();

  const payload = {
    customer: {
      _id: '123321',
      name: 'Felipe Production Teste',
    },
    items: items,
  };

  const postOrder = usePostOrder(payload);

  const handleOrder = (): void => {
    try {
      postOrder.mutate(payload);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (postOrder.isSuccess) {
      setStep(2);
      setItems([]);
    }
    if (postOrder.isError) {
      Alert.alert('Erro ao realizar a compra!');
    }
  }, [postOrder.isSuccess, postOrder.isError]);

  const getButtonTitle = () => {
    switch (step) {
      case 0:
        return 'Comece as compras';
      case 1:
        return 'Checkout';
      case 2:
        return 'Voltar para home';
      default:
        return 'Comece as compras';
    }
  };

  useEffect(() => {
    if (totalQuantity > 0) {
      setStep(1);
    }
  }, [totalQuantity]);

  const renderHero = () => {
    if (totalQuantity === 0 && step === 0) {
      return (
        <>
          <ShoppingIcon width={96} height={96} color="#6cc51d" />
          <S.HeroTitle>Seu Carrinho esta vazio!</S.HeroTitle>
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <ShoppingIcon width={96} height={96} color="#6cc51d" />
          <S.HeroTitle>Compra enviada com sucesso!</S.HeroTitle>
        </>
      );
    }

    return <></>;
  };

  return (
    <ScrollView>
      <S.Container>
        <Header title="Carrinho" color="#000" />
        <S.Content>
          {step === 1 ? (
            <>
              {items.map(item => (
                <S.ProductContainer key={item._id}>
                  <S.ProductImage
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                  <S.ProductInfo>
                    <S.ProductPrice>R$ {item.price}</S.ProductPrice>
                    <S.ProductTitle>{item.name}</S.ProductTitle>
                    <S.ProductUnit>{item.unit}</S.ProductUnit>
                  </S.ProductInfo>
                  <S.ProductQuantityContainer>
                    <S.ProductQuantity>{item.quantity}</S.ProductQuantity>
                  </S.ProductQuantityContainer>
                </S.ProductContainer>
              ))}
              <S.TotalContainer>
                <S.TotalTitle>Total</S.TotalTitle>
                <S.TotalValue>R$ {total}</S.TotalValue>
              </S.TotalContainer>
            </>
          ) : (
            <S.Hero>{renderHero()}</S.Hero>
          )}
          <S.ButtonContainer>
            <ButtonComponent
              title={getButtonTitle()}
              onPress={(): void => {
                if (step === 0 || step === 2) {
                  navigation.goBack();
                } else {
                  handleOrder();
                }
              }}
            />
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </ScrollView>
  );
}

export {Shopping};
