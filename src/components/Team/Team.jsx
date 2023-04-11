import { Icon } from 'components/Icon/Icon';
import {
  TeamInner,
  SectionTitle,
  TitleSpan,
  SetctionText,
  TeamList,
  TeamItem,
  TeamItemInner,
  TeamImg,
  TeamName,
  TeamRole,
  TeamRoleText,
} from './Team.styled';

import teamImg_1 from '../../img/team/team-1.jpg';
import teamWebp_1 from '../../img/team/team-1.webp';

export const Team = () => {
  return (
    <TeamInner>
      <SectionTitle>
        <TitleSpan>Наша</TitleSpan> команда
      </SectionTitle>
      <SetctionText>
        Зарядіть свій будинок сонячною енергією та економте на рахунках за
        електрику!
      </SetctionText>
      <TeamList>
        <TeamItem>
          <TeamItemInner>
            <picture>
              <source type="image/webp" srcSet={teamWebp_1} />
              <source type="image/jpg" srcSet={teamImg_1} />
              <TeamImg
                src={teamImg_1}
                loading="lazy"
                width="270"
                height="280"
              />
            </picture>
            <TeamName>Павел Рогожа</TeamName>
            <TeamRole>
              <Icon name="icon-engineer" />
              <TeamRoleText>Інженер</TeamRoleText>
            </TeamRole>
          </TeamItemInner>
        </TeamItem>
        <TeamItem>
          <TeamItemInner>
            <picture>
              <source type="image/webp" srcSet={teamWebp_1} />
              <source type="image/jpg" srcSet={teamImg_1} />
              <TeamImg
                src={teamImg_1}
                loading="lazy"
                width="270"
                height="280"
              />
            </picture>
            <TeamName>Павел Рогожа</TeamName>
            <TeamRole>
              <Icon name="icon-engineer" />
              <TeamRoleText>Інженер</TeamRoleText>
            </TeamRole>
          </TeamItemInner>
        </TeamItem>
        <TeamItem>
          <TeamItemInner>
            <picture>
              <source type="image/webp" srcSet={teamWebp_1} />
              <source type="image/jpg" srcSet={teamImg_1} />
              <TeamImg
                src={teamImg_1}
                loading="lazy"
                width="270"
                height="280"
              />
            </picture>
            <TeamName>Павел Рогожа</TeamName>
            <TeamRole>
              <Icon name="icon-engineer" />
              <TeamRoleText>Інженер</TeamRoleText>
            </TeamRole>
          </TeamItemInner>
        </TeamItem>
      </TeamList>
    </TeamInner>
  );
};
