import { DescripBox, Inner, Text, Title } from './Option.styled';

export const OptionContacts = ({ widthScreen }) => {
  return (
    <Inner>
      <DescripBox>
        <Title>Контакти</Title>
        <Text>
          Раді Вашому зверненню в нашу <br />
          організацію задля енергонезалежності <br />
          та прибутків
          {widthScreen < 768 && (
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          )}
        </Text>
      </DescripBox>
    </Inner>
  );
};
