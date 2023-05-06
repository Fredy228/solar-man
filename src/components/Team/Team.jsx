import { Icon } from 'components/Icon/Icon';
import {
  TeamInner,
  TeamList,
  TeamItem,
  TeamItemInner,
  TeamImg,
  TeamName,
  TeamRole,
  TeamRoleText,
  SpanLineText,
} from './Team.styled';

import {
  SectionTitle,
  TitleSpan,
  SetctionText,
} from 'components/SectionTitle/SectionTitle.styled';

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
                alt="Анатолій Віговський"
              />
            </picture>
            <TeamName>Анатолій Віговський</TeamName>
            <TeamRole>
              <Icon name="icon-brain" />
              <TeamRoleText>Мозок</TeamRoleText>
            </TeamRole>
            <SpanLineText>Менеджер з продажу</SpanLineText>
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
                alt="Павел Рогожа"
              />
            </picture>
            <TeamName>Павло Рогожа</TeamName>
            <TeamRole>
              <Icon name="icon-heart" />
              <TeamRoleText>Серце</TeamRoleText>
            </TeamRole>
            <SpanLineText>Управляючий</SpanLineText>
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
                alt="Малаевский Максим"
              />
            </picture>
            <TeamName>Малаевский Максим</TeamName>
            <TeamRole>
              <Icon name="icon-muscles" />
              <TeamRoleText>М'язи</TeamRoleText>
            </TeamRole>
            <SpanLineText>Головний бригадир</SpanLineText>
          </TeamItemInner>
        </TeamItem>
      </TeamList>
    </TeamInner>
  );
};
