// COMPONENTS
import {Header} from '@components/Header/Header';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as S from './SignIn.styles';
import {ButtonComponent} from '@components/Button/Button';
import {Alert, KeyboardAvoidingViewComponent} from 'react-native';
import {usePostSignin} from '@services/Auth/PostSignIn';
import {useEffect, useState} from 'react';

function SignIn() {
  const [email, setEmail] = useState<string>('contaTeste@gmail.com');
  const [password, setPassword] = useState<string>('123');

  const background = require('@assets/images/SignInBackground.png');
  const navigation = useNavigation();
  const postSignIn = usePostSignin({email, password});

  const payload = {
    email,
    password,
  };

  const handleSignIn = (): void => {
    try {
      postSignIn.mutate({payload});
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (postSignIn.isSuccess) {
      Alert.alert('Login realizado com sucesso!');
      navigation.navigate('HomeTabs');
    }
    if (postSignIn.isError) {
      Alert.alert('Erro ao realizar login!');
    }
  }, [postSignIn.isSuccess, postSignIn.isError]);
  // keyboard avoid
  return (
    <>
      <S.BackgroundContainer>
        <S.Background source={background} />
        <S.HeaderContainer>
          <Header title="Boas Vindas" />
        </S.HeaderContainer>
      </S.BackgroundContainer>
      <S.Content>
        <S.Title>Boas Vindas</S.Title>
        <S.Description>Entre em sua conta e comece a comprar!</S.Description>
        <S.InputContainer>
          <S.Input
            placeholder="e-mail"
            placeholderTextColor={'#fefefe'}
            autoCapitalize="none"
            onChangeText={e => setEmail(e)}
            value={email}
          />
          <S.Input
            placeholder="senha"
            placeholderTextColor={'#fefefe'}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={p => setPassword(p)}
            value={password}
          />
          <ButtonComponent
            title="Entrar"
            onPress={(): void => handleSignIn()}
          />
        </S.InputContainer>

        <S.Footer>
          <S.FooterText>Não tem conta ainda?</S.FooterText>
          <S.FooterLinkContainer>
            <S.FooterLink onPress={(): void => navigation.navigate('SignUp')}>
              Cadastre-se
            </S.FooterLink>
          </S.FooterLinkContainer>
        </S.Footer>
      </S.Content>
    </>
  );
}

export {SignIn};
