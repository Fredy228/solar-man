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

export const BenefitsEnterprises = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги </TitleSpan>
        <br /> для вашого бізнесу
      </SectionTitle>
      <List>
        <Item>
          <TitleBenefits>
            <Icon name="icon-profit" />
            Енергоекономія для рентабельності
          </TitleBenefits>
          <TextBenefits>
            Сонячна електростанція зменшує споживання електроенергії до 70%
            протягом світлого дня, що знижує собівартість та збільшує
            прибутковість бізнесу.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-documents-cross" />
            Без додаткових реєстарцій
          </TitleBenefits>
          <TextBenefits>
            Сонячні електростанції для власного використання не потребують
            "Зеленого" тарифу та державного погодження, що зменшує кількість
            бюрократичних процедур.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-refund" />
            Швидкий дохід від інвестицій
          </TitleBenefits>
          <TextBenefits>
            Інвестиція в сонячну електростанцію для власного споживання поверне
            себе за 5,5 років. Якщо ви маєте більш високий тариф на
            електроенергію, окупність буде ще швидшою.
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
