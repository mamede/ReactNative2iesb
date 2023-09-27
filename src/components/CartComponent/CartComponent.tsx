// JOTAI
import {useAtom} from 'jotai';

// STYLES
import * as S from './CartComponent.styles';

// TYPES
import {CartComponentProps} from './CartComponent.types';
import {cartTotalQuantity} from '@atom/store';

function CartComponent({icon}: CartComponentProps) {
  const [totalQuantity] = useAtom(cartTotalQuantity);
  return (
    <S.Container>
      {icon}
      <S.Text>{totalQuantity}</S.Text>
    </S.Container>
  );
}

export {CartComponent};
