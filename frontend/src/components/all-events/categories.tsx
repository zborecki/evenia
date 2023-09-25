import { Tabs } from '#components/all-events/tabs';
import { getCategories } from '#requests/categories-requests';

const Categories = async () => {
  const { categories } = await getCategories();

  return (
    <div>
      <Tabs categories={categories} />
    </div>
  );
};

export { Categories };
