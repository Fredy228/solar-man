import {
  Inner,
  Item,
  List,
  TitleBenefits,
  TextBenefits,
  WrapperSvg,
} from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';
import {
  SectionSubtitle,
  SectionTitle,
} from '../../CommonStyle/SectionTitle.styled';

export const BenefitsEnterprises = () => {
  return (
    <Inner>
      <SectionTitle>Переваги для вашого бізнесу</SectionTitle>
      <SectionSubtitle>
        Чому варто якомога скоріше скористатись можливостями
      </SectionSubtitle>
      <List>
        <Item>
          <WrapperSvg>
            <Icon name="icon-profit" />
          </WrapperSvg>
          <TitleBenefits>Енергоекономія для рентабельності</TitleBenefits>
          <TextBenefits>
            Сонячна електростанція зменшує споживання електроенергії до 70%
            протягом світлого дня, що знижує собівартість та збільшує
            прибутковість бізнесу.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-smile" />
          </WrapperSvg>
          <TitleBenefits>Без додаткових реєстарцій</TitleBenefits>
          <TextBenefits>
            Сонячні електростанції для власного використання не потребують
            "Зеленого" тарифу та державного погодження, що зменшує кількість
            бюрократичних процедур.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-refund" />
          </WrapperSvg>
          <TitleBenefits>Швидкий дохід від інвестицій</TitleBenefits>
          <TextBenefits>
            Інвестиція в сонячну електростанцію для власного споживання поверне
            себе за 5,5 років. Якщо ви маєте більш високий тариф на
            електроенергію, окупність буде ще швидшою.
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
