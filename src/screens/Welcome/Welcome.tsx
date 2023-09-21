// COMPONENTS
import {Header} from '@components/Header/Header';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as S from './Welcome.styles';

function Welcome() {
  const background = require('@assets/images/SignInBackground.png');
  const navigation = useNavigation();

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
        <S.Description>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </S.Description>
        <S.ButtonContainer>
          <S.Button>
            <S.ButtonText>Criar conta Google</S.ButtonText>
          </S.Button>
          <S.Button>
            <S.ButtonText>Criar conta Usuario e Senha</S.ButtonText>
          </S.Button>
        </S.ButtonContainer>
        <S.Footer>
          <S.FooterText>Já tem uma conta?</S.FooterText>
          <S.FooterLinkContainer>
            <S.FooterLink onPress={(): void => navigation.navigate('SignIn')}>
              Entrar
            </S.FooterLink>
          </S.FooterLinkContainer>
        </S.Footer>
      </S.Content>
    </>
  );
}

export {Welcome};
