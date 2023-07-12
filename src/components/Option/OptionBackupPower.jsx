import { Icon } from 'components/Icon/Icon';
import { DescripBox, ImageBox, Inner, Text, Title, Img } from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import backupIntro from '../../img/ourServices/backup-intro.webp';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionBackupPower = ({ widthScreen }) => {
  const { toggleModal } = useShowModal();

  return (
    <Inner minHeight={true}>
      <DescripBox>
        <Title>
          Системи <br />
          резервного живлення <br />
          для{' '}
          {widthScreen < 768 ? 'енерго- \nнезалежності' : 'енергонезалежності'}
        </Title>
        <Text>
          Система, що забезпечує електроживлення будинку при відключенні мережі
          або відсутності електроенергії. Можуть бути автономними та працювати
          без підключення до мережі, {widthScreen < 768 && <br />}
          забезпечуючи {widthScreen < 768 && <br />}стабільне{' '}
          {widthScreen < 768 && <br />}живлення {widthScreen < 768 && <br />}
          незалежно {widthScreen < 768 && <br />}від зовнішніх{' '}
          {widthScreen < 768 && <br />}факторів.
        </Text>

        <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
          <Icon name={'icon-annotation'} /> Замовити консультацію
        </ButtonOrg>
      </DescripBox>
      <ImageBox>
        <Img src={backupIntro} width="718" height="718" loading="lazy" />
      </ImageBox>
    </Inner>
  );
};
