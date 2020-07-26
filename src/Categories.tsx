import React, { FunctionComponent } from 'react';
import useData from './hooks/useData';

import PageError from './PageError';
import Loading from './Loading';
import SubcategoryGraph from './SubcateogryGraph';

type CategoriesType = {
  category: string;
};

const Categories: FunctionComponent<CategoriesType> = ({ category }) => {
  const { data, loading, error } = useData(category);

  if (error) {
    return <PageError error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (Array.isArray(data) && data !== null) {
    return <SubcategoryGraph subcategory="cost" data={data} />;
  }
  return null;
};

export default React.memo(Categories);
