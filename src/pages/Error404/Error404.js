import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../configs';

export default function Error404() {
  return (
    <section>
      <h2>Page not found</h2>
      <p>
        <Link to={ROUTES.DASHBOARD()}>Back to home</Link>
      </p>
    </section>
  );
}
