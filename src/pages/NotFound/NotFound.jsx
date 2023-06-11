import { ImgNotFound, InnerNotFound, NameErr } from './NotFound.styled';

import imgPage from '../../img/not-found.png';

const NotFound = () => {
  return (
    <InnerNotFound>
      <ImgNotFound
        src={imgPage}
        alt={'Not found 404'}
        width={'1000'}
        height={'640'}
      />
      <NameErr>Сторінка не знайдена :(</NameErr>
    </InnerNotFound>
  );
};

export default NotFound;
