import React, {useEffect, useState} from 'react';

// ICONS
import ShoppingIcon from '@assets/icons/shopping.svg';

// NAVIGATION
import {useIsFocused, useNavigation} from '@react-navigation/native';

// SERVICES
import {useGetProducts} from '@services/Products/GetProducts';
// STYLES
import * as S from './Home.styles';
import {ItemProps} from '@shared/types/itemTypes';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';

function Home() {
  const navigation = useNavigation();
  const getProducts = useGetProducts();
  const isFocused = useIsFocused();
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    if (!isFocused) {
      setItems([]);
    }
  }, [isFocused]);

  useEffect(() => {
    if (getProducts.data) {
      setItems(getProducts.data);
    }
  }, [getProducts.data]);

  const hasQuantity = 1;

  return (
    <S.Container>
      <S.Header>
        <S.Button onPress={(): void => navigation.navigate('Settings')}>
          <S.AvatarContainer>
            <S.Avatar source={{uri: 'https://github.com/mamede.png'}} />
          </S.AvatarContainer>
        </S.Button>
        <S.User>
          <S.Greeting>Olá,</S.Greeting>
          <S.Message>Um belo dia para fazer compras!</S.Message>
        </S.User>
      </S.Header>

      <S.FlatList
        data={items}
        keyExtractor={item => item._id}
        numColumns={2}
        renderItem={({item}) => (
          <S.ProductContainer>
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

            {hasQuantity > 0 ? (
              <S.ProductHasQuantity>
                <S.RemoveItem>
                  <ShoppingIcon width={20} height={20} color="#6CC51D" />
                </S.RemoveItem>
                <S.ProductFooterText>Adicionar</S.ProductFooterText>
                <S.AddItem>
                  <ShoppingIcon width={20} height={20} color="#6CC51D" />
                </S.AddItem>
              </S.ProductHasQuantity>
            ) : (
              <S.ProductFooter>
                <ShoppingIcon width={20} height={20} color="#6CC51D" />
                <S.ProductFooterText>Adicionar</S.ProductFooterText>
              </S.ProductFooter>
            )}
          </S.ProductContainer>
        )}
        ListEmptyComponent={
          <ListEmpty message="Nenhum produto foi encontrado, tente novamente mais tarde!" />
        }
      />
    </S.Container>
  );
}

export {Home};
