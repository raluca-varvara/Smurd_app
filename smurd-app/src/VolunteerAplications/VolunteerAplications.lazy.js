import React, { lazy, Suspense } from 'react';

const LazyVolunteerAplications = lazy(() => import('./VolunteerAplications'));

const VolunteerAplications = props => (
  <Suspense fallback={null}>
    <LazyVolunteerAplications {...props} />
  </Suspense>
);

export default VolunteerAplications;
