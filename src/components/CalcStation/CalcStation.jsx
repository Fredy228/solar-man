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
  Sun,
} from './CalcStation.styled';

import {
  SectionTitle,
  TitleSpan,
  SetctionText,
} from 'components/SectionTitle/SectionTitle.styled';

import { Icon } from 'components/Icon/Icon';

import { useShowModal } from 'globalState/globalState';

import stationPng_xl from '../../img/calcStation/station_xl.png';
import stationWebp_xl from '../../img/calcStation/station_xl.webp';
import stationPng_md from '../../img/calcStation/station_md.png';
import stationWebp_md from '../../img/calcStation/station_md.webp';
import stationPng_sm from '../../img/calcStation/station_sm.png';
import stationWebp_sm from '../../img/calcStation/station_sm.webp';

export const CalcStaion = () => {
  const [valueRange, setValueRange] = useState([10]);
  const { toggleModal } = useShowModal();

  const [profit, setProfit] = useState(0);
  const [income, setIncome] = useState(0);
  const [payback, setPayback] = useState(0);
  const [stationCost, setStationCost] = useState(0);

  useEffect(() => {
    const k = 1 + ((1.3 - 1) * (valueRange[0] - 5)) / (30 - 5);
    const incomeStaion = valueRange[0] * k * 1000 * 0.17;
    const costStation = valueRange[0] * 760;

    setPayback(costStation / incomeStaion);
    setIncome(incomeStaion);
    setStationCost(costStation);
    setProfit((incomeStaion / costStation) * 100);
  }, [valueRange]);

  return (
    <StationInner>
      <SectionTitle>
        <TitleSpan>Розрахунок</TitleSpan>
        <br /> прибутковості станції
      </SectionTitle>
      <SetctionText>Оберіть потрібну потужність</SetctionText>
      <Sun></Sun>
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
                  height: '15px',
                  width: '100%',
                  borderRadius: '10px',
                  border: '2px solid #16498a',
                  background: getTrackBackground({
                    values: valueRange,
                    colors: ['#F7D716', 'transparent'],
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
                height: '42px',
                width: '42px',
                borderRadius: '42px',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
              }}
            >
              <Icon name="icon-light-flash" width={'42px'} height={'42px'} />
            </div>
          )}
        />
        <OutputSlider id="output">{`${valueRange[0]} кВт`}</OutputSlider>
      </SliderBox>
      <picture>
        <source
          media="(min-width: 1000px)"
          type="image/webp"
          srcSet={stationWebp_xl}
        />
        <source
          media="(min-width: 1000px)"
          type="image/png"
          srcSet={stationPng_xl}
        />
        <source
          media="(min-width: 500px)"
          type="image/webp"
          srcSet={stationWebp_md}
        />
        <source
          media="(min-width: 500px)"
          type="image/png"
          srcSet={stationPng_md}
        />
        <source
          media="(max-width: 499px)"
          type="image/webp"
          srcSet={stationWebp_sm}
        />
        <source
          media="(max-width: 499px)"
          type="image/png"
          srcSet={stationPng_sm}
        />
        <StationImg
          src={stationPng_xl}
          loading="lazy"
          width="896"
          height="281"
          alt="Сонячні панелі"
        />
      </picture>
      <ListResult>
        <ItemResult>
          <TextResult>
            Вартість станції
            <br /> <b>{stationCost}$</b>
          </TextResult>
        </ItemResult>
        <ItemResult>
          <TextResult>
            Прибудковість
            <br /> <b>{profit.toFixed(2)}%</b>
          </TextResult>
        </ItemResult>
        <ItemResult>
          <TextResult>
            Річний дохід
            <br /> <b>{income.toFixed(0)}$</b>
          </TextResult>
        </ItemResult>
        <ItemResult>
          <TextResult>
            Окупність
            <br /> <b>{payback.toFixed(2)}p</b>
          </TextResult>
        </ItemResult>
      </ListResult>
      <ButtonGetCall type="button" onClick={() => toggleModal(true)}>
        <Icon name="icon-energy" />
        Отримати консультацію
      </ButtonGetCall>
    </StationInner>
  );
};
