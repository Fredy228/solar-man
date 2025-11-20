import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UTM_TAGS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

export const UtmTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const utmTags = {};
    let hasUtm = false;

    UTM_TAGS.forEach(tag => {
      if (searchParams.has(tag)) {
        utmTags[tag] = searchParams.get(tag);
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem('utm_tags', JSON.stringify(utmTags));
    }
  }, [location.search]);

  return null;
};
