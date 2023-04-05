import {
  StationInner,
  SectionTitle,
  TitleSpan,
  SetctionText,
  SliderBox,
  StationImg,
  ListResult,
  ItemResult,
  TextResult,
  ButtonGetCall,
  SliderTriggerImg,
  OutputSlider,
  Sun,
} from './CalcStation.styled';
import { Icon } from 'components/Icon/Icon';
import { Range, getTrackBackground } from 'react-range';
import { useState } from 'react';

import stationImgPng from '../../img/calcStation/solar-panels.png';
import stationImgWebp from '../../img/calcStation/solar-panels.webp';

export const CalcStaion = () => {
  const [value, setValue] = useState([5]);

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
          values={value}
          step={1}
          min={1}
          max={30}
          onChange={values => setValue(values)}
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
                  border: '2px solid #00425A',
                  background: getTrackBackground({
                    values: value,
                    colors: ['#FC7300', 'transparent'],
                    min: 1,
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
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
              }}
            >
              <SliderTriggerImg name="icon-light-flash" />
            </div>
          )}
        />
        <OutputSlider id="output">{`${value[0]} кВт`}</OutputSlider>
      </SliderBox>
      <picture>
        <source type="image/webp" srcSet={stationImgWebp} />
        <source type="image/png" srcSet={stationImgPng} />
        <StationImg src={stationImgPng} loading="lazy" />
      </picture>
      <ListResult>
        <ItemResult>
          <TextResult>
            Річний дохід
            <br /> <b>2778$</b>
          </TextResult>
        </ItemResult>
        <ItemResult>
          <TextResult>
            Окупність
            <br /> <b>2.46</b>
          </TextResult>
        </ItemResult>
        <ItemResult>
          <TextResult>
            Прибудковість
            <br /> <b>56.7%</b>
          </TextResult>
        </ItemResult>
      </ListResult>
      <ButtonGetCall type="button">
        <Icon name="icon-energy" />
        Отримати консультацію
      </ButtonGetCall>
    </StationInner>
  );
};
