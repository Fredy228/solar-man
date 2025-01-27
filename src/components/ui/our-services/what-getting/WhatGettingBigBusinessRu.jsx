import {
  WhatGettingIcon,
  WhatGettingInner,
  WhatGettingItem,
  WhatGettingList,
  WhatGettingText,
} from './WhatGetting.styled';
import { Icon } from '../../../reused/icon/Icon';
import { SectionTitle } from '../../../../common-style/SectionTitle.styled';

export const WhatGettingBigBusinessRu = () => {
  return (
    <WhatGettingInner>
      <SectionTitle marginBottom={'60px'}>получаете</SectionTitle>
      <WhatGettingList>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Экономия 9,45 грн <br /> на 1 кВт
          </WhatGettingText>
        </WhatGettingItem>
        <WhatGettingItem>
          <WhatGettingIcon>
            <Icon name={'icon-check-list'} />
          </WhatGettingIcon>
          <WhatGettingText>
            Электроэнергия <br /> 24/7
          </WhatGettingText>
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
          <WhatGettingText>
            Кредитование <br /> 5-7-9%
          </WhatGettingText>
        </WhatGettingItem>
      </WhatGettingList>
    </WhatGettingInner>
  );
};
