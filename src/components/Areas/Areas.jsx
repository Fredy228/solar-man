import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';
import { Inner, List, Item, Text } from './Areas.styled';
import { Icon } from 'components/Icon/Icon';

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
      <SectionTitle color="true">
        <TitleSpan>Сфери</TitleSpan> <br />
        застосування електростанцій
      </SectionTitle>
      <List>
        {areasList.map((item, index) => (
          <Item key={index}>
            <Icon name="icon-solar-list" /> <Text>{item}</Text>
          </Item>
        ))}
      </List>
    </Inner>
  );
};
