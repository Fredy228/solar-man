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

export const BenefitsHome = () => {
  return (
    <Inner>
      <SectionTitle>Переваги для вашого будинку</SectionTitle>
      <SectionSubtitle>
        Чому варто якомога скоріше скористатись можливостями
      </SectionSubtitle>
      <List>
        <Item>
          <WrapperSvg>
            <Icon name="icon-saving" />
          </WrapperSvg>
          <TitleBenefits>Сонце дарує електроенергію для житла</TitleBenefits>
          <TextBenefits>
            Отримуйте безкоштовну та безперебійну електроенергію з сонця
            впродовж 8 місяців року, завдяки сонячним електростанціям для вашого
            житла, зменшуючи власні витрати на енергоспоживання.
          </TextBenefits>
        </Item>
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
        <Item>
          <WrapperSvg>
            <Icon name="icon-ecology" />
          </WrapperSvg>
          <TitleBenefits>Екологічно чиста енергія</TitleBenefits>
          <TextBenefits>
            Сонячні електростанції є екологічно чистим джерелом енергії, що не
            викидає в атмосферу шкідливих викидів, сприяючи збереженню природних
            ресурсів та зменшенню впливу на зміну клімату.
          </TextBenefits>
        </Item>
      </List>
    </Inner>
  );
};
