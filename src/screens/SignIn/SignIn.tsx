// COMPONENTS
import {Header} from '@components/Header/Header';

// STYLES
import * as S from './SignIn.styles';

function SignIn() {
  const background = require('@assets/images/SignInBackground.png');

  return (
    <>
      <S.BackgroundContainer>
        <S.Background source={background} />
        <S.HeaderContainer>
          <Header title="Boas Vindas" />
        </S.HeaderContainer>
        <S.Content>
          <S.Title>Titulo bla bla bla</S.Title>
        </S.Content>
      </S.BackgroundContainer>
    </>
  );
}

export {SignIn};
