import React, { lazy, Suspense } from 'react';

const LazyLessonImage = lazy(() => import('./LessonImage'));

const LessonImage = props => (
  <Suspense fallback={null}>
    <LazyLessonImage {...props} />
  </Suspense>
);

export default LessonImage;
