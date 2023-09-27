import React from 'react';

// ASSETS
import Minus from '@assets/icons/minus.svg';
import Plus from '@assets/icons/plus.svg';

// COMPONENTS
import {ScrollView, Text} from 'react-native';

// STYLES
import * as S from './Details.styles';
import {ItemProps} from '@shared/types/itemTypes';
import {Header} from '@components/Header/Header';
import {ButtonComponent} from '@components/Button/Button';
import {cartQuantity, cartItems} from '@atom/store';
import {useAtom} from 'jotai';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function Details(props: any) {
  const product = props.route.params.item as ItemProps;
  const [quantity, setQuantity] = useAtom(cartQuantity);
  const [, setItems] = useAtom(cartItems);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!isFocused) {
      setQuantity(0);
    }
  }, [isFocused]);

  const handleAddItem = (): void => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = (): void => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = (): void => {
    navigation.navigate('HomeTabs');
    setItems(prevItems => {
      const itemExistenteIndex = prevItems.findIndex(
        item => item.name === product.name,
      );

      if (itemExistenteIndex !== -1) {
        // Se o item já existe no carrinho, crie uma cópia do array anterior
        const novoCarrinho = [...prevItems];

        // Atualize a quantidade do item existente
        novoCarrinho[itemExistenteIndex].quantity! += quantity!;

        return novoCarrinho;
      } else {
        // Caso contrário, adicione um novo item ao carrinho
        const newProduct = {...product, quantity: quantity};
        return [...prevItems, newProduct];
      }
    });
  };

  return (
    <ScrollView>
      <Header title={`Detalhes do produto ${product.name}`} color="#000" />
      <S.Container>
        <S.BackgroundImage source={{uri: product.imageUrl}} />
        <S.Content>
          <S.Pricing>R$ {product.price}</S.Pricing>
          <S.ProductTitle>{product.name}</S.ProductTitle>
          <S.ProductUnit>{product.unit}</S.ProductUnit>
          <S.ProductDescription>{product.description}</S.ProductDescription>
          <S.AddToCart>
            <S.AddToCartText>Quantidade</S.AddToCartText>
            <S.ManageQuantity>
              <S.Remove onPress={(): void => handleRemoveItem()}>
                <Minus width={24} height={24} color="#6CC51D" />
              </S.Remove>
              <Text
                style={{
                  borderLeftColor: '#c0c0c0',
                  borderLeftWidth: 1,
                  borderRightColor: '#c0c0c0',
                  borderRightWidth: 1,
                  height: 40,
                  color: '#000',
                  fontSize: 18,
                  paddingHorizontal: 20,
                  paddingTop: 7,
                  marginHorizontal: 20,
                }}>
                {quantity || 0}
              </Text>
              <S.Add onPress={(): void => handleAddItem()}>
                <Plus width={24} height={24} color="#6CC51D" />
              </S.Add>
            </S.ManageQuantity>
          </S.AddToCart>
          <ButtonComponent
            title="Adicionar ao carrinho"
            onPress={(): void => handleAddToCart()}
          />
        </S.Content>
      </S.Container>
    </ScrollView>
  );
}

export {Details};
