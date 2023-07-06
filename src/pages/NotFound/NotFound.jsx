import { ImgNotFound, InnerNotFound, NameErr } from './NotFound.styled';

import imgPage from '../../img/not-found.png';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';

const NotFound = () => {
  return (
    <GoogleAnalyticsWrapper>
      <InnerNotFound>
        <ImgNotFound
          src={imgPage}
          alt={'Not found 404'}
          width={'1000'}
          height={'640'}
        />
        <NameErr>Сторінка не знайдена :(</NameErr>
      </InnerNotFound>
    </GoogleAnalyticsWrapper>
  );
};

export default NotFound;
