import React, { FunctionComponent, useMemo } from 'react';
import useData from './hooks/useData';

import PageError from './PageError';
import Loading from './Loading';

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

  return <div>{JSON.stringify(data)}</div>;
};

export default Categories;
