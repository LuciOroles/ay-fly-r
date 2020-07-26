import React, { FunctionComponent, ChangeEvent } from 'react';
import useData from './hooks/useData';

import PageError from './PageError';
import Loading from './Loading';
import groupWithLocation from './groupWithLocation';

type CategoriesType = {
  category: string;
  subcategories: string[];
  loadData: Function;
};

const SubcategoryPicker: FunctionComponent<CategoriesType> = ({
  category,
  subcategories,
  loadData,
}) => {
  const { data, loading, error } = useData(category);
  const onRadioChange = (evt: ChangeEvent) => {
    const v = evt.target.getAttribute('value');
    if (v && data) return loadData(groupWithLocation(v)(data), v);
    return loadData([], null);
  };
  if (error) {
    return <PageError error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (Array.isArray(data) && data !== null) {
    return (
      <div className="radioWrapper">
        {subcategories.map((s, i) => (
          <label htmlFor={`${s}_id`} key={i}>
            {s}
            <input
              type="radio"
              name="category"
              value={s}
              id={`${s}_id`}
              onChange={onRadioChange}
            />
          </label>
        ))}
      </div>
    );
  }
  return null;
};

export default React.memo(SubcategoryPicker);
