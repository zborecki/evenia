import { Content } from '#components/header/content';
import '#components/header/styles.scss';

const Header = () => (
  <header className="evenia-header">
    <div className="evenia-header__container">
      <Content />
    </div>
  </header>
);

export { Header };
