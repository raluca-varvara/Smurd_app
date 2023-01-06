import React, { lazy, Suspense } from 'react';

const LazyFirstAidLessons = lazy(() => import('./FirstAidLessons'));

const FirstAidLessons = props => (
  <Suspense fallback={null}>
    <LazyFirstAidLessons {...props} />
  </Suspense>
);

export default FirstAidLessons;
