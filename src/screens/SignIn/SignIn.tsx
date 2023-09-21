import React from 'react';

// ASSETS
import Arrow from '@assets/icons/backArrow.svg';

// STYLES
import * as S from './SignIn.styles';
import {useNavigation} from '@react-navigation/native';

function SignIn() {
  const navigation = useNavigation();

  return (
    <S.Container edges={['top']}>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.BackContainer onPress={(): void => navigation.goBack()}>
            <Arrow width={16} height={16} color="#FFF" />
          </S.BackContainer>
          <S.TextHeader>Sign In</S.TextHeader>
          <S.VoidContainer />
        </S.HeaderContent>
      </S.HeaderContainer>
    </S.Container>
  );
}

export {SignIn};
