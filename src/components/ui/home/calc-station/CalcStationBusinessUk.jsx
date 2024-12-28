import { Range, getTrackBackground } from 'react-range';
import { useEffect, useState } from 'react';
import {
  StationInner,
  SliderBox,
  StationImg,
  ListResult,
  ItemResult,
  TextResult,
  ButtonGetCall,
  OutputSlider,
  WrapperTitle,
  WrapperSlider,
  SubTextSlider,
  CalcInput,
} from './CalcStation.styled';

import { SectionTitle } from '../../../../common-style/SectionTitle.styled';

import { Icon } from 'components/reused/icon/Icon';

import { useShowModal } from 'globalState/globalState';

import caclStation from '../../../../img/calcStation/calc-station.webp';
import { useLocation } from 'react-router-dom';

export const CalcStaionBusinessUk = ({ widthScreen }) => {
  const [valueRange, setValueRange] = useState([30]);
  const { toggleModal } = useShowModal();

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];

  const [profit, setProfit] = useState(0);
  const [income, setIncome] = useState(0);
  const [payback, setPayback] = useState(0);
  const [tariff, setTariff] = useState(7);

  const formatter = new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'uk-UK', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });

  useEffect(() => {
    function k(rangeCount) {
      if (rangeCount >= 150) return 1.9;
      if (rangeCount >= 100) return 1.8;
      if (rangeCount >= 50) return 1.7;
      if (rangeCount >= 30) return 1.4;
      return 1.1;
    }

    const costStation = valueRange[0] * 760;
    setIncome(costStation);
    const economy = (tariff - 1) * valueRange[0] * 1100 * k(valueRange[0]);

    setPayback((costStation * 40) / economy);
    setProfit(economy);
  }, [valueRange, tariff]);

  return (
    <StationInner>
      <StationImg
        src={caclStation}
        alt={'Сонячні панелі'}
        loading="lazy"
        width={'919'}
        height={'563'}
      />
      <WrapperTitle>
        <SectionTitle text={'left'}>
          {lang === 'ru' ? (
            <>
              Расчет <br />
              прибыльности <br />
              станции
            </>
          ) : (
            <>
              Розрахунок
              <br /> прибутковості
              <br />
              станції
            </>
          )}
        </SectionTitle>
      </WrapperTitle>

      <WrapperSlider>
        <SubTextSlider>
          {lang === 'ru'
            ? 'Выберите нужную мощность'
            : 'Оберіть потрібну потужність'}
        </SubTextSlider>
        <SliderBox>
          <Range
            values={valueRange}
            step={5}
            min={10}
            max={200}
            onChange={values => setValueRange(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '42px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '10px',
                    width: '100%',
                    borderRadius: '10px',
                    background: getTrackBackground({
                      values: valueRange,
                      colors: ['#FC7300', '#E5E7EB'],
                      min: 10,
                      max: 200,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '45px',
                  width: '45px',
                  borderRadius: '25px',
                  backgroundColor: '#FC7300',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  outline: 'none',
                  position: 'relative',
                }}
              >
                <Icon name="icon-light-flash" width={'20px'} height={'20px'} />
                <OutputSlider id="output">{`${valueRange[0]} кВт`}</OutputSlider>
              </div>
            )}
          />
        </SliderBox>
        <ListResult>
          <ItemResult>
            <TextResult>
              {lang === 'ru' ? (
                <>
                  Экономия, <br /> грн/год
                </>
              ) : (
                <>
                  Економія, <br /> грн/рік
                </>
              )}
            </TextResult>
            <span>{formatter.format(profit)}</span>
          </ItemResult>

          <ItemResult>
            <TextResult>
              {lang === 'ru' ? (
                <>Стоимость станции, $</>
              ) : (
                <>Вартість станції, $</>
              )}
            </TextResult>
            <span>{formatter.format(income)}</span>
          </ItemResult>

          <ItemResult>
            <TextResult>
              {lang === 'ru' ? 'Окупаемость' : 'Окупність'}
            </TextResult>
            <span>{payback.toFixed(2)}p</span>
          </ItemResult>

          <ItemResult>
            <TextResult>
              {lang === 'ru' ? 'Тариф, грн/кВт' : 'Тариф, грн/кВт'}
            </TextResult>
            <CalcInput
              type={'number'}
              value={tariff}
              onChange={e => setTariff(e.target.value)}
            />
          </ItemResult>
        </ListResult>

        <ButtonGetCall type={'button'} onClick={() => toggleModal(true)}>
          <Icon name={'icon-phone'} />

          {lang === 'ru' ? (
            <>Получить {widthScreen > 1000 && 'бесплатную'} консультацию</>
          ) : (
            <>Отримати {widthScreen > 1000 && 'безкоштовну'} консультацію</>
          )}
        </ButtonGetCall>
      </WrapperSlider>
    </StationInner>
  );
};
