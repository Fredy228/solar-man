import {
  InnerMission,
  TextMission,
  WrapperIcon,
  WrapperText,
} from './OurMission.styled';
import { Icon } from '../Icon/Icon';

export const OurMission = ({ widthScreen }) => {
  return (
    <InnerMission>
      <WrapperIcon>
        <Icon name={'icon-shuttle-space'} />
      </WrapperIcon>
      <WrapperText>
        <TextMission>
          «Забезпечуємо мудрих українців даруючою {widthScreen < 768 && <br />}
          енергією сонця <br /> в комфорт, {widthScreen < 768 && <br />}безпеку
          та {widthScreen < 768 && <br />}прибутки»
        </TextMission>
      </WrapperText>
    </InnerMission>
  );
};
