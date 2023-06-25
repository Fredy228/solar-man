import {
  SectionSubtitle,
  SectionTitle,
} from '../../CommonStyle/SectionTitle.styled';

import {
  Inner,
  Item,
  List,
  TitleBenefits,
  TextBenefits,
  WrapperSvg,
} from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsBackupPower = () => {
  return (
    <Inner>
      <SectionTitle>Переваги для вашого будинку</SectionTitle>
      <SectionSubtitle>
        Чому варто якомога скоріше скористатись можливостями
      </SectionSubtitle>
      <List>
        <Item>
          <WrapperSvg>
            <Icon name="icon-accumulator" />
          </WrapperSvg>
          <TitleBenefits>Нестрашні відключення</TitleBenefits>
          <TextBenefits>
            Навіть під час відключення електромережі вулиці, ваш будинок може
            продовжувати отримувати електроенергію завдяки сонячній
            електростанції.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-nut" />
          </WrapperSvg>
          <TitleBenefits>Можливість збільшення автономності</TitleBenefits>
          <TextBenefits>
            Система дозволяє розширювати потужність автономних інверторів,
            акумуляторів і навіть встановлювати сонячні панелі поетапно в
            залежності від потреб споживача.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-shield" />
          </WrapperSvg>
          <TitleBenefits>Гарантія 10-ки років</TitleBenefits>
          <TextBenefits>
            Літієві акумулятори мають довгу термін експлуатації понад 15 років і
            більше 6000 циклів заряду/розряду, що робить їх ефективними для
            зберігання сонячної енергії. Сонячні панелі мають термін служби
            понад 25 років.
          </TextBenefits>
        </Item>
      </List>
    </Inner>
  );
};
