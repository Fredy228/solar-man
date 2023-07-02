import { useNavigate } from 'react-router-dom';
import { ButtonBack, WrapperNavBack } from './GoBackBtn.styled';
import { Icon } from '../Icon/Icon';

export const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <WrapperNavBack>
      <ButtonBack type={'button'} onClick={() => navigate(-1)}>
        <Icon name={'icon-arrow'} /> Назад
      </ButtonBack>
    </WrapperNavBack>
  );
};
