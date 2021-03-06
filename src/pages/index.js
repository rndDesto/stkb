import React from 'react';

const Suspensed = (Element) => function suspense(props) {
  return (
    <React.Suspense fallback={<div />}>
      <Element {...props} />
    </React.Suspense>
  );
};

export default {
  Error404: Suspensed(React.lazy(() => import('./Error404'))),
  Movie: Suspensed(React.lazy(() => import('./Movie'))),
};
