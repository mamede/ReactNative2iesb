// COMPONENTS
import {Header} from '@components/Header/Header';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as S from './SignUp.styles';
import {ButtonComponent} from '@components/Button/Button';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {usePostSignUp} from '@services/Auth/PostSignUp';
import {useEffect, useState} from 'react';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const background = require('@assets/images/SignUpBackground.png');
  const navigation = useNavigation();
  const postSignUp = usePostSignUp({name, email, password});

  const payload = {
    name,
    email,
    password,
  };

  const handleSignIn = (): void => {
    try {
      postSignUp.mutate({payload});
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (postSignUp.isSuccess) {
      Alert.alert('Conta criada com sucesso! Use seus dados para fazer login.');
      navigation.navigate('SignIn');
    }
    if (postSignUp.isError) {
      Alert.alert('Erro ao realizar criação da conta!');
    }
  }, [postSignUp.isSuccess, postSignUp.isError]);

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <S.BackgroundContainer>
            <S.Background source={background} />
            <S.HeaderContainer>
              <Header title="Boas Vindas" />
            </S.HeaderContainer>
          </S.BackgroundContainer>
          <S.Content>
            <S.Title>Boas Vindas</S.Title>
            <S.Description>
              Insira os dados abaixo e crie usa conta
            </S.Description>
            <S.InputContainer>
              <S.Input
                placeholder="Nome"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                onChangeText={e => setName(e)}
                value={name}
              />
              <S.Input
                placeholder="E-mail"
                placeholderTextColor={'#000'}
                autoCapitalize="none"
                onChangeText={e => setEmail(e)}
                value={email}
              />
              <S.Input
                placeholder="Senha"
                placeholderTextColor={'#000'}
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
              <S.FooterText>Já tem uma conta?</S.FooterText>
              <S.FooterLinkContainer>
                <S.FooterLink
                  onPress={(): void => navigation.navigate('SignIn')}>
                  Cadastrar
                </S.FooterLink>
              </S.FooterLinkContainer>
            </S.Footer>
          </S.Content>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export {SignUp};
