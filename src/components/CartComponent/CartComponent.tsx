// STYLES
import * as S from './CartComponent.styles';

// TYPES
import {CartComponentProps} from './CartComponent.types';

function CartComponent({icon}: CartComponentProps) {
  return (
    <S.Container>
      {icon}
      <S.Text>10</S.Text>
    </S.Container>
  );
}

export {CartComponent};
