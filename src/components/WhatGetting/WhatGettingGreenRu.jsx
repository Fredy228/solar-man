import {
  WhatGettingIcon,
  WhatGettingInner,
  WhatGettingItem,
  WhatGettingList,
  WhatGettingText,
} from './WhatGetting.styled';
import { Icon } from '../Icon/Icon';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

export const WhatGettingGreenRu = () => {
  return (
    <WhatGettingInner>
      <SectionTitle marginBottom={'60px'}>получаете</SectionTitle>
      <WhatGettingList>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>Доход 7000$ в год</WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Дешевая <br /> электроэнергия
          </WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>Пассивный доход</WhatGettingText>
        </WhatGettingItem>
      </WhatGettingList>
    </WhatGettingInner>
  );
};
