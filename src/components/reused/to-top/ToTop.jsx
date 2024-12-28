import { ToTopBox } from './ToTop.styled';
import { Icon } from 'components/reused/icon/Icon';

export const ToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ToTopBox onClick={scrollToTop}>
      <Icon name="icon-downarrow" />
    </ToTopBox>
  );
};
