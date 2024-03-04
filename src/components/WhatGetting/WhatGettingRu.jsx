import {
  WhatGettingIcon,
  WhatGettingInner,
  WhatGettingItem,
  WhatGettingList,
  WhatGettingText,
} from './WhatGetting.styled';
import { Icon } from '../Icon/Icon';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

export const WhatGettingRu = () => {
  return (
    <WhatGettingInner>
      <SectionTitle marginBottom={'60px'}>получаете</SectionTitle>
      <WhatGettingList>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>Подбор</WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>Установка</WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>Обслуживание</WhatGettingText>
        </WhatGettingItem>
      </WhatGettingList>
    </WhatGettingInner>
  );
};
