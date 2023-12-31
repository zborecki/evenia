import { useTranslations } from 'next-intl';

import { footerLinks } from '#constants/footer';

const Interactive = () => {
  const t = useTranslations('Label');

  return (
    <ul>
      {
        footerLinks.map(({ children, href, isProtected }) => (!isProtected ? (
          <li className="evenia-footer__item" key={`Footer-interactive-item-${href}`}>
            <a className="evenia-footer__link" href={href}>{ t(children) }</a>
          </li>
        ) : undefined))
      }
    </ul>
  );
};

export { Interactive };
