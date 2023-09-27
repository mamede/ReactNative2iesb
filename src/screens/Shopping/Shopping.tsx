import React, {useState} from 'react';

// STYLES
import * as S from './Shopping.styles';
import {Header} from '@components/Header/Header';
import {ButtonComponent} from '@components/Button/Button';

function Shopping() {
  const [step, setStep] = useState(0);

  const getButtonTitle = () => {
    switch (step) {
      case 0:
        return 'Comece as compras'; // Navigation para home
      case 1:
        return 'Checkout'; // Fazer a request
      case 2:
        return 'Voltar para home'; // Navigation para home
      default:
        return 'Comece as compras';
    }
  };
  return (
    <S.Container>
      <Header title="Carrinho" color="#000" />
      <S.Content>
        <ButtonComponent title={getButtonTitle()} onPress={(): void => {}} />
      </S.Content>
    </S.Container>
  );
}

export {Shopping};
