import { render, screen } from '@testing-library/react';
import Main from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
<main
  class="styles__Wrapper-sc-dzx1ao-0 ljMswT"
>
  <img
    alt="Imagem de um átomo e React Avançado escrito ao lado"
    class="styles__Logo-sc-dzx1ao-1 kYFAEE"
    src="/img/logo.svg"
  />
  <h1
    class="styles__Title-sc-dzx1ao-2 hhieHe"
  >
    React Avançado
  </h1>
  <h2
    class="styles__Description-sc-dzx1ao-3 gLnIGp"
  >
    Typscript, ReactJS, NextJS, Styled Components
  </h2>
  <img
    alt="Um desenvolvedor de frente para a tela com código"
    class="styles__Illustration-sc-dzx1ao-4 kavQjQ"
    src="img/helo-illustration.svg"
  />
</main>
`);
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
    });
  });
});
