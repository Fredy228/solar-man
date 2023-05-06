import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import {
  Inner,
  Item,
  List,
  TitleBenefits,
  TextBenefits,
} from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsHome = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги сонячних станцій </TitleSpan>
        <br /> для вашого будинку
      </SectionTitle>
      <List>
        <Item>
          <TitleBenefits>
            <Icon name="icon-saving" />
            Сонце дарує електроенергію для житла
          </TitleBenefits>
          <TextBenefits>
            Отримуйте безкоштовну та безперебійну електроенергію з сонця
            впродовж 8 місяців року, завдяки сонячним електростанціям для вашого
            житла, зменшуючи власні витрати на енергоспоживання.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-accumulator" />
            Нестрашні відключення
          </TitleBenefits>
          <TextBenefits>
            Навіть під час відключення електромережі вулиці, ваш будинок може
            продовжувати отримувати електроенергію завдяки сонячній
            електростанції.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-shield" />
            Гарантія 10-ки років
          </TitleBenefits>
          <TextBenefits>
            Літієві акумулятори мають довгу термін експлуатації понад 15 років і
            більше 6000 циклів заряду/розряду, що робить їх ефективними для
            зберігання сонячної енергії. Сонячні панелі мають термін служби
            понад 25 років.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-ecology" />
            Екологічно чиста енергія
          </TitleBenefits>
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
