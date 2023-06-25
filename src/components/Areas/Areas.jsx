import {
  Inner,
  List,
  Item,
  Text,
  WrapperTitle,
  WrapperSvg,
} from './Areas.styled';
import { Icon } from 'components/Icon/Icon';
import {
  SectionSubtitle,
  SectionTitle,
} from '../../CommonStyle/SectionTitle.styled';

const areasList = [
  'АЗС',
  'Готелі',
  'Склади',
  'Автомийки',
  'СТО',
  'Ресторани',
  'Офісні центри',
  'Елеватори',
  'ТРЦ',
  'Теплиці',
  'Супермаркети',
  'Ферми',
];

export const Areas = () => {
  return (
    <Inner>
      <WrapperTitle>
        <SectionTitle colorText={'white'} text={'left'}>
          Сфери <br />
          застосування
        </SectionTitle>
        <SectionSubtitle colorText={'white'} text={'left'}>
          Якщо ваш бізнес є серед цих сфер, то ви 100% можете вийти на нові
          рівні прибутку та незалежності
        </SectionSubtitle>
      </WrapperTitle>

      <List>
        {areasList.map((item, index) => (
          <Item key={index}>
            <WrapperSvg>
              <Icon name="icon-check-list" />
            </WrapperSvg>
            <Text>{item}</Text>
          </Item>
        ))}
      </List>
    </Inner>
  );
};
