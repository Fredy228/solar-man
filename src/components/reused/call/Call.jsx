import { Icon } from 'components/reused/icon/Icon';
import { CallBox } from './Call.styled';
import { useShowModal } from 'globalState/globalState';

export const Call = () => {
  const { toggleModal } = useShowModal();
  return (
    <CallBox onClick={() => toggleModal(true)}>
      <Icon name="icon-call" viewBox="0 0 24 24" />
    </CallBox>
  );
};
