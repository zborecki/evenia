import { Slideshow } from '#components/partners/slideshow';
import { getPartners } from '#requests/partners';

const Companies = async () => {
  const { partners } = await getPartners();

  return <Slideshow partners={partners} />;
};

export { Companies };
