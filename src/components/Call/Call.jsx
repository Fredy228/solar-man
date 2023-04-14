import { Icon } from 'components/Icon/Icon';
import { CallBox } from './Call.styled';

export const Call = ({ toggleModal }) => {
  return (
    <CallBox onClick={toggleModal}>
      <Icon name="icon-call" viewBox="0 0 24 24" />
    </CallBox>
  );
};
