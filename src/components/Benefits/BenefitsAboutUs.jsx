import {
  Inner,
  Item,
  List,
  TitleBenefits,
  TextBenefits,
  WrapperSvg,
} from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsAboutUs = () => {
  return (
    <Inner>
      <List>
        <Item>
          <WrapperSvg>
            <Icon name="icon-ecology" />
          </WrapperSvg>
          <TitleBenefits>Географія проектів</TitleBenefits>
          <TextBenefits>
            За останні кілька років ми успішно здійснили численні проекти у
            різних регіонах України: місто Одеса і область (Фонтанка,
            Крижанівка, Кодима, Чорноморськ, Затока, Кулевча), Миколаїв, Херсон.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-power-off" />
          </WrapperSvg>
          <TitleBenefits>Будуємо від 3 до 200 кВт потужності </TitleBenefits>
          <TextBenefits>
            Ми будуємо електростанції як для приватних осель так і для
            підприємств. Наш досвід і фах дозволяє будувати електростанції від 3
            до 200 кВт потужності.
          </TextBenefits>
        </Item>
      </List>
    </Inner>
  );
};
