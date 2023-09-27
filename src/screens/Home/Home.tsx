import React, {useEffect, useState} from 'react';

// NAVIGATION
import {useIsFocused, useNavigation} from '@react-navigation/native';

// SERVICES
import {useGetProducts} from '@services/Products/GetProducts';

// STYLES
import * as S from './Home.styles';
import {ItemProps} from '@shared/types/itemTypes';
import {ListEmpty} from '@components/ListEmpty/ListEmpty';
import {Text} from 'react-native-svg';

function Home() {
  const navigation = useNavigation();
  const getProducts = useGetProducts();
  const isFocused = useIsFocused();
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    if (!isFocused) {
      setItems([]);
      getProducts.remove();
    }
  }, [isFocused]);

  useEffect(() => {
    if (getProducts.data) {
      setItems(getProducts.data);
    }
  }, [getProducts.data]);

  return (
    <S.Container edges={['top']}>
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

      <S.Title>Produtos recomendados</S.Title>

      <S.FlatList
        data={items}
        keyExtractor={item => item._id}
        numColumns={2}
        renderItem={({item}) => (
          <S.ProductContainer
            onPress={(): void => navigation.navigate('Details', {item})}>
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
          </S.ProductContainer>
        )}
        ListEmptyComponent={() => {
          return getProducts.isFetching ? (
            <Text>Carregando...</Text>
          ) : (
            <ListEmpty message="Nenhum produto foi encontrado, tente novamente mais tarde!" />
          );
        }}
      />
    </S.Container>
  );
}

export {Home};
