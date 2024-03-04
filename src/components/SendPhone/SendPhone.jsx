import { Inner, Text, Span, TextAdd } from './SendPhone.styled';

import { useBasket } from 'globalState/globalState';
import { ApplicationForm } from './ApplicationForm';
import { useLocation } from 'react-router-dom';

export const SendPhone = () => {
  const { currentGood } = useBasket();

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];
  const isRus = lang === 'ru';

  return (
    <Inner>
      <Text isBold={true}>
        {isRus
          ? 'Получите бесплатную консультацию!'
          : 'Отримаєте безкоштовну консультацію!'}
      </Text>
      <Text>
        {isRus
          ? 'Заполните данные или позвоните нам по номеру'
          : 'Заповніть дані або зателефонуйте нам по номеру'}{' '}
        <Span href="tel:+380680554488">0680554488</Span>
      </Text>
      <TextAdd>
        {isRus
          ? 'В ближайшее время с вами свяжется менеджер.'
          : "Найближчим часом з вами зв'яжеться менеджер."}{' '}
      </TextAdd>
      <ApplicationForm currentGood={currentGood} isRus={isRus} />
      {currentGood && <TextAdd>Консультація стосовно: {currentGood}</TextAdd>}
    </Inner>
  );
};
