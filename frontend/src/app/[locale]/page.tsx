import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Home');

  return (
    <main>
      <h1>{ t('title') }</h1>
    </main>
  );
};

export default Home;
