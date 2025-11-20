import React from 'react';
import { Link } from 'react-router-dom';

export const LinkWithUtm = ({ to, ...props }) => {
  const storedUtmTags = JSON.parse(sessionStorage.getItem('utm_tags'));
  const toUrl = new URL(to, window.location.origin);

  if (storedUtmTags) {
    Object.entries(storedUtmTags).forEach(([key, value]) => {
      toUrl.searchParams.set(key, value);
    });
  }

  return <Link to={`${toUrl.pathname}${toUrl.search}`} {...props} />;
};
