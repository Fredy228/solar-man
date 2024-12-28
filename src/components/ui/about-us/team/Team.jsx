import { Icon } from 'components/reused/icon/Icon';
import {
  TeamInner,
  TeamList,
  TeamItem,
  TeamItemInner,
  TeamImg,
  TeamName,
  TeamRole,
  SpanLineText,
  TeamSvgWrapper,
} from './Team.styled';

import {
  SectionTitle,
  SectionSubtitle,
} from '../../../../common-style/SectionTitle.styled';

import teamWebp_1 from '../../../../img/team/teamWebp_1.webp';
import teamWebp_2 from '../../../../img/team/teamWebp_2.webp';
import teamWebp_3 from '../../../../img/team/teamWebp_3.webp';

const teams = [
  {
    id: 1,
    name: 'Анатолій Віговський',
    role: 'Менеджер з продажів',
    photo: teamWebp_1,
    iconName: 'icon-brain',
  },
  {
    id: 2,
    name: 'Павло Рогожа',
    role: 'Управляючий',
    photo: teamWebp_2,
    iconName: 'icon-heart',
  },
  {
    id: 3,
    name: 'Максим Малаєвський',
    role: 'Начальник виробництва',
    photo: teamWebp_3,
    iconName: 'icon-muscles',
  },
];

export const Team = () => {
  return (
    <TeamInner>
      <SectionTitle colorText={'white'}>Зіркова команда</SectionTitle>
      <SectionSubtitle colorText={'white'} maxWidth={'580px'}>
        Наша команда - це з висококваліфіковані інженеріи та монтажники, які
        мають багаторічний досвід у реалізації сонячних проектів. Ми гарантуємо
        високу якість роботи та використання надійних компонентів, що
        забезпечують тривалу та безперебійну роботу сонячних електростанцій.
      </SectionSubtitle>

      <TeamList>
        {teams.map(item => (
          <TeamItem key={item.id}>
            <TeamItemInner>
              <TeamImg
                src={item.photo}
                loading="lazy"
                width="224"
                height="224"
                alt={item.name}
              />
              <TeamRole>
                <TeamSvgWrapper>
                  <Icon name={item.iconName} />
                </TeamSvgWrapper>
              </TeamRole>
              <TeamName>{item.name}</TeamName>
              <SpanLineText>{item.role}</SpanLineText>
            </TeamItemInner>
          </TeamItem>
        ))}
      </TeamList>
    </TeamInner>
  );
};
