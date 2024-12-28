import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const useUtmTags = () => {
  const [searchParams] = useSearchParams();
  const utmSourceParams = searchParams.get('utm_source');
  const utmMediumParams = searchParams.get('utm_medium');
  const utmCampaignParams = searchParams.get('utm_campaign');
  const utmTermParams = searchParams.get('utm_term');
  const utmContentParams = searchParams.get('utm_content');

  return useMemo(
    () => ({
      utm_source: utmSourceParams,
      utm_medium: utmMediumParams,
      utm_campaign: utmCampaignParams,
      utm_term: utmTermParams,
      utm_content: utmContentParams,
    }),
    [
      utmSourceParams,
      utmMediumParams,
      utmCampaignParams,
      utmTermParams,
      utmContentParams,
    ]
  );
};
