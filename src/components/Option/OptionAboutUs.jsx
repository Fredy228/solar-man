import {
  DescripBox,
  ImageBox,
  Inner,
  Text,
  Title,
  ImgAboutUs,
} from './Option.styled';

import imgIntro_webp from '../../img/ourServices/enterprise-intro.webp';

export const OptionAboutUs = () => {
  return (
    <Inner>
      <DescripBox>
        <Title>Про нас</Title>
        <Text>
          Компанія SolarMan - це команда досвідчених фахівців у сфері
          будівництва та впровадження сонячних електростанцій. Ми дбаємо про
          деталі і проектуємо кожну електростанцію з використанням передових
          технологій та кращих практик у галузі.
        </Text>
      </DescripBox>
      <ImageBox heightSet={'130px'}>
        <ImgAboutUs
          src={imgIntro_webp}
          width="718"
          height="718"
          loading="lazy"
        />
      </ImageBox>
    </Inner>
  );
};
