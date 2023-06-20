import { Inner, TextAboutUs, UnderTeam } from './AboutUs.styled';
import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { Container } from '../Common.styled';
import { Team } from '../../components/Team/Team';
import {
  SectionTitle,
  TitleSpan,
} from '../../components/SectionTitle/SectionTitle.styled';

const AboutUs = () => {
  return (
    <GoogleAnalyticsWrapper>
      <Container>
        <Inner>
          <SectionTitle>
            <TitleSpan>Про компанію</TitleSpan> Solar Man
          </SectionTitle>
          <TextAboutUs>
            Компанія Solar Man Pro - це команда досвідчених фахівців у сфері
            будівництва та впровадження сонячних електростанцій.
          </TextAboutUs>
          <TextAboutUs>
            Ми будуємо електростанції як для приватних осель так і для
            підприємств. Наш досвід і фах дозволяє будувати електростанції від 3
            до 200 кВт потужності.
          </TextAboutUs>
          <TextAboutUs>
            За останні кілька років ми успішно здійснили численні проекти у
            різних регіонах України: місто Одеса і область (Фонтанка,
            Крижанівка, Кодима, Чорноморськ, Затока, Кулевча), Миколаїв, Херсон.
          </TextAboutUs>
          <TextAboutUs>
            Ми дбаємо про деталі і проектуємо кожну електростанцію з
            використанням передових технологій та кращих практик у галузі.
          </TextAboutUs>
        </Inner>
        <Team />
        <UnderTeam>
          <TextAboutUs>
            Наша команда - це з висококваліфіковані інженеріи та монтажники, які
            мають багаторічний досвід у реалізації сонячних проектів. Ми
            гарантуємо високу якість роботи та використання надійних
            компонентів, що забезпечують тривалу та безперебійну роботу сонячних
            електростанцій.
          </TextAboutUs>
          <TextAboutUs>
            Наші експерти завжди готові надати професійні консультації та
            допомогти обрати оптимальний варіант сонячної електростанції.
          </TextAboutUs>
          <TextAboutUs>
            Solar Man Pro — це інновації, стабільність та довіра, які втілені в
            сонячних панелях, що перетворюють промені сонця на безмежну енергію
            та прибуток!
          </TextAboutUs>
        </UnderTeam>
      </Container>
    </GoogleAnalyticsWrapper>
  );
};

export default AboutUs;
