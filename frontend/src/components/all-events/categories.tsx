import { Tabs } from '#components/all-events/tabs';
import { getCategories } from '#requests/categories';

const Categories = async () => {
  const { categories } = await getCategories();

  return <Tabs categories={categories} />;
};

export { Categories };
