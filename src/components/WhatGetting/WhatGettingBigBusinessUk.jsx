import {
  WhatGettingIcon,
  WhatGettingInner,
  WhatGettingItem,
  WhatGettingList,
  WhatGettingText,
} from './WhatGetting.styled';
import { Icon } from '../Icon/Icon';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

export const WhatGettingBigBusinessUk = () => {
  return (
    <WhatGettingInner>
      <SectionTitle marginBottom={'60px'}>отримуєте</SectionTitle>
      <WhatGettingList>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Економія 9,45 грн <br /> на 1 кВт
          </WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Електроенергія <br /> 24/7
          </WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Дешева <br /> електроенергія
          </WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Кредитування <br /> 5-7-9%
          </WhatGettingText>
        </WhatGettingItem>
      </WhatGettingList>
    </WhatGettingInner>
  );
};
