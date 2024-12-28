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
} from './CalcStation.styled';

import { SectionTitle } from '../../../../common-style/SectionTitle.styled';

import { Icon } from 'components/reused/icon/Icon';

import { useShowModal } from 'globalState/globalState';

import caclStation from '../../../../img/calcStation/calc-station.webp';
import { useLocation } from 'react-router-dom';

export const CalcStaionGreenUk = ({ widthScreen }) => {
  const [valueRange, setValueRange] = useState([10]);
  const { toggleModal } = useShowModal();

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];

  const [profit, setProfit] = useState(0);
  const [income, setIncome] = useState(0);
  const [payback, setPayback] = useState(0);
  const [stationCost, setStationCost] = useState(0);

  useEffect(() => {
    const k = 1 + ((1.3 - 1) * (valueRange[0] - 5)) / (30 - 5);
    const incomeStation = valueRange[0] * k * 1000 * 0.17;
    const costStation = valueRange[0] * 760;

    setPayback(costStation / incomeStation);
    setIncome(incomeStation);
    setStationCost(costStation);
    setProfit((incomeStation / costStation) * 100);
  }, [valueRange]);

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
            step={1}
            min={5}
            max={30}
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
                      min: 5,
                      max: 30,
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
              {lang === 'ru' ? 'Прибыльность' : 'Прибудковість'}
            </TextResult>
            <span>{profit.toFixed(2)}%</span>
          </ItemResult>

          <ItemResult>
            <TextResult>
              {lang === 'ru' ? 'Годовой доход' : 'Річний дохід'}
            </TextResult>
            <span>{income.toFixed(0)}$</span>
          </ItemResult>

          <ItemResult>
            <TextResult>
              {lang === 'ru' ? 'Окупаемость' : 'Окупність'}
            </TextResult>
            <span>{payback.toFixed(2)}p</span>
          </ItemResult>

          <ItemResult>
            <TextResult>
              {lang === 'ru' ? 'Стоимость станции' : 'Вартість станції'}
            </TextResult>
            <span>{stationCost}$</span>
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
