import React, { lazy, Suspense } from 'react';

const LazyMockUpApplicationVerification = lazy(() => import('./MockUpApplicationVerification'));

const MockUpApplicationVerification = props => (
  <Suspense fallback={null}>
    <LazyMockUpApplicationVerification {...props} />
  </Suspense>
);

export default MockUpApplicationVerification;
