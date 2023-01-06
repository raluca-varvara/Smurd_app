import React, { lazy, Suspense } from 'react';

const LazyAddTutorials = lazy(() => import('./AddTutorials'));

const AddTutorials = props => (
  <Suspense fallback={null}>
    <LazyAddTutorials {...props} />
  </Suspense>
);

export default AddTutorials;
