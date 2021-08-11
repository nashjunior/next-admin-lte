import React from 'react';
import * as Styles from './styles';

const Main: React.FC = () => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <Styles.Title>React Avançado</Styles.Title>
      <Styles.Description>
        Typscript, ReactJS, NextJS, Styled Components
      </Styles.Description>

      <Styles.Illustration
        src="img/helo-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
      />
    </Styles.Wrapper>
  );
};

export default Main;
