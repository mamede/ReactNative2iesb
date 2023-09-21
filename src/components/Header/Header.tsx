// ASSETS
import Arrow from '@assets/icons/backArrow.svg';

// NAVIGATION
import {useNavigation} from '@react-navigation/native';

// STYLES
import * as S from './Header.styles';

// TYPES
import {HeaderProps} from 'src/shared/types/headerTypes';

function Header({title}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.BackContainer onPress={(): void => navigation.goBack()}>
            <Arrow width={16} height={16} color="#FFF" />
          </S.BackContainer>
          <S.TextHeader>{title}</S.TextHeader>
          <S.VoidContainer />
        </S.HeaderContent>
      </S.HeaderContainer>
    </S.Container>
  );
}

export {Header};
