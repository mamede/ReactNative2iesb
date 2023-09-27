import React from 'react';

// STYLES
import * as S from './Settings.styles';
import {Linking} from 'react-native';

function Settings() {
  return (
    <S.Container>
      <S.AvatarContainer>
        <S.Avatar source={{uri: 'https://github.com/mamede.png'}} />
      </S.AvatarContainer>
      <S.Content>
        <S.Text>Felipe Mamede</S.Text>
        <S.Text>Desenvolvedor FrontEnd</S.Text>
        <S.Text>Matrícula: 2373171025</S.Text>
      </S.Content>

      <S.Content>
        <S.Text>Links úteis (clicaveis)</S.Text>
        <S.Linking
          onPress={(): void => {
            Linking.canOpenURL('https://github.com/mamede').then(
              (): Promise<any> => Linking.openURL('https://github.com/mamede'),
            );
          }}>
          <S.Text>https://github.com/mamede</S.Text>
        </S.Linking>
        <S.Linking
          onPress={(): void => {
            Linking.canOpenURL('https://mamede.dev/').then(
              (): Promise<any> => Linking.openURL('https://mamede.dev/'),
            );
          }}>
          <S.Text>https://mamede.dev/</S.Text>
        </S.Linking>
      </S.Content>
    </S.Container>
  );
}

export {Settings};
