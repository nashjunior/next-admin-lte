import React from 'react';
import * as Styles from './styles';

type IMainProps = {
  title?: string;
  description?: string;
};

const Main: React.FC<IMainProps> = ({
  title = 'React Avançado',
  description = 'Typscript, ReactJS, NextJS, Styled Components',
}) => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>{description}</Styles.Description>

      <Styles.Illustration
        src="/img/heroIllustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
      />
    </Styles.Wrapper>
  );
};

export default Main;
