import {
  GreenBenefitInner,
  GreenBenefitItem,
  GreenBenefitList,
  GreenBenefitNumber,
  GreenBenefitText,
  GreenBenefitTitle,
} from './GreenBenefit.styled';
import {
  SectionSubtitle,
  SectionTitle,
} from '../../../../common-style/SectionTitle.styled';

export const GreenBenefitUk = () => {
  return (
    <GreenBenefitInner>
      <SectionTitle>Отримуйте довготривалу вигоду</SectionTitle>
      <SectionSubtitle>
        За кожний єтап є відповідальний відділ, який контролює якість і деталі{' '}
        <br />
        кожного кроку співпраці
      </SectionSubtitle>
      <GreenBenefitList>
        <GreenBenefitItem>
          <GreenBenefitNumber>3</GreenBenefitNumber>
          <GreenBenefitTitle>дні</GreenBenefitTitle>
          <GreenBenefitText>Встановлення</GreenBenefitText>
        </GreenBenefitItem>
        <GreenBenefitItem>
          <GreenBenefitNumber>2</GreenBenefitNumber>
          <GreenBenefitTitle>роки</GreenBenefitTitle>
          <GreenBenefitText>Монтажні роботи</GreenBenefitText>
        </GreenBenefitItem>
        <GreenBenefitItem>
          <GreenBenefitNumber>5</GreenBenefitNumber>
          <GreenBenefitTitle>років</GreenBenefitTitle>
          <GreenBenefitText>
            Середній період <br /> окупності
          </GreenBenefitText>
        </GreenBenefitItem>
        <GreenBenefitItem>
          <GreenBenefitNumber>12</GreenBenefitNumber>
          <GreenBenefitTitle>років</GreenBenefitTitle>
          <GreenBenefitText>Гарантія</GreenBenefitText>
        </GreenBenefitItem>
        <GreenBenefitItem>
          <GreenBenefitNumber>25</GreenBenefitNumber>
          <GreenBenefitTitle>років</GreenBenefitTitle>
          <GreenBenefitText>
            Середня тривалість <br /> роботи СЕС
          </GreenBenefitText>
        </GreenBenefitItem>
      </GreenBenefitList>
    </GreenBenefitInner>
  );
};
