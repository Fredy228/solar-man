import { Button, Text, WindowBox, WrapperBtn } from './DeleteWindow.styled';
import { Icon } from '../../reused/icon/Icon';

export const DeleteWindow = ({ fn, id, url }) => {
  return (
    <WindowBox>
      <Text>Точно хочете видалити?</Text>
      <WrapperBtn>
        <Button
          type={'button'}
          onClick={() => {
            fn(id, url);
          }}
        >
          <Icon name="icon-delete" />
          Видалити
        </Button>
      </WrapperBtn>
    </WindowBox>
  );
};
