import React, { lazy, Suspense } from 'react';

const LazyFilterBox = lazy(() => import('./FilterBox'));

const FilterBox = props => (
  <Suspense fallback={null}>
    <LazyFilterBox {...props} />
  </Suspense>
);

export default FilterBox;
