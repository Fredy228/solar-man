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
import teamImg_2 from '../../img/team/team-2.jpg';
import teamWebp_2 from '../../img/team/team-2.webp';
import teamImg_3 from '../../img/team/team-3.jpg';
import teamWebp_3 from '../../img/team/team-3.webp';

export const Team = () => {
  return (
    <TeamInner id="we" data-section>
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
              <source type="image/webp" srcSet={teamWebp_2} />
              <source type="image/jpg" srcSet={teamImg_2} />
              <TeamImg
                src={teamImg_2}
                loading="lazy"
                width="270"
                height="280"
              />
            </picture>
            <TeamName>Анатолій Віговський</TeamName>
            <TeamRole>
              <Icon name="icon-manager" />
              <TeamRoleText>Менеджер з продажу</TeamRoleText>
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
              <Icon name="icon-leader" />
              <TeamRoleText>Управляючий</TeamRoleText>
            </TeamRole>
          </TeamItemInner>
        </TeamItem>
        <TeamItem>
          <TeamItemInner>
            <picture>
              <source type="image/webp" srcSet={teamWebp_3} />
              <source type="image/jpg" srcSet={teamImg_3} />
              <TeamImg
                src={teamImg_3}
                loading="lazy"
                width="270"
                height="280"
              />
            </picture>
            <TeamName>Малаевский Максим</TeamName>
            <TeamRole>
              <Icon name="icon-engineer" />
              <TeamRoleText>Головний бригадир</TeamRoleText>
            </TeamRole>
          </TeamItemInner>
        </TeamItem>
      </TeamList>
    </TeamInner>
  );
};