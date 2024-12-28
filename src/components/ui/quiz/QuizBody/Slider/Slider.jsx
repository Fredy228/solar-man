import { QuizBodyInner } from '../QuizBody.styled';
import { getTrackBackground } from 'react-range';
import { Icon } from '../../../../reused/icon/Icon';
import {
  BrakePoints,
  CustomRange,
  QuizOutputSlider,
  QuizSliderBox,
  RenderThumb,
  RenderTrack,
  WrapperBrakePoints,
  WrapperRenderTrack,
} from './Slider.styled';
import { OutputSlider } from '../../../home/calc-station/CalcStation.styled';
import { useMemo } from 'react';

export const Slider = ({
  setAnswersQuiz,
  widthScreen,
  answersQuiz,
  currentQuestion,
}) => {
  const currentTarget = answersQuiz[currentQuestion - 1];
  const rangeValue = currentTarget.currentIdx[0];
  const points = currentTarget.points || [];
  const maxRange = useMemo(
    () =>
      points.length > 2 && points.at(-1) === points.at(-2)
        ? points.at(-1) + currentTarget.before / points.length
        : currentTarget.before,
    []
  );
  const isMoreRange = maxRange !== currentTarget.before;

  const calcBrakePoint = number => {
    const upNumber = number - currentTarget.from;
    const downNumber = maxRange - currentTarget.from;
    const percent = (upNumber / downNumber) * 100;
    return `${percent}%`;
  };

  const choseAnswer = currentAnswer => {
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].currentValue = currentAnswer;
      return state;
    });
  };

  const handleRange = values => {
    setAnswersQuiz(prev => {
      const state = [...prev];
      state[currentQuestion - 1].currentIdx = values;
      return state;
    });
  };

  const findBetweenValue = number => {
    for (let i = 0; i < points.length - 1; i++) {
      if (number >= points[i] && number <= points[i + 1]) {
        return [points[i], points[i + 1]];
      }
    }

    if (number <= points[0]) {
      return [null, points[0]];
    }

    if (number >= points.at(-1)) {
      return [points.at(-1), null];
    }
    return null;
  };

  const fixValueRange = () => {
    setTimeout(() => {
      const between = findBetweenValue(rangeValue);
      if (!between) return;

      if (between[1] && between[0]) {
        const middle = (between[1] - between[0]) / 2 + between[0];
        if (middle < rangeValue) {
          handleRange([between[1]]);
          choseAnswer(`до ${between[1]} кВт`);
        } else {
          handleRange([between[0]]);
          choseAnswer(`до ${between[0]} кВт`);
        }
        return;
      }
      if (!between[0] && between[1]) {
        handleRange([between[1]]);
        choseAnswer(`до ${between[1]} кВт`);
        return;
      }
      if (!between[1] && between[0]) {
        if (between[0] === maxRange) {
          handleRange([between[0]]);
          choseAnswer(`до ${between[0]} кВт`);
        } else {
          const middle = (maxRange - between[0]) / 2 + between[0];
          if (rangeValue > middle) {
            handleRange([maxRange]);
            choseAnswer(`більше ${between[0]} кВт`);
          } else {
            handleRange([between[0]]);
            choseAnswer(`до ${between[0]} кВт`);
          }
        }
        return;
      }
    }, 50);
  };

  return (
    <QuizBodyInner>
      <QuizSliderBox>
        <CustomRange
          values={[rangeValue]}
          step={currentTarget.step || 1}
          min={currentTarget.from}
          max={maxRange}
          onFinalChange={fixValueRange}
          onChange={handleRange}
          renderTrack={({ props, children }) => (
            <WrapperRenderTrack
              style={{
                ...props.style,
              }}
            >
              <RenderTrack
                ref={props.ref}
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  background: getTrackBackground({
                    values: [rangeValue],
                    colors: ['#FC7300', '#CBCED4'],
                    min: currentTarget.from,
                    max: maxRange,
                  }),
                }}
              >
                {children}
              </RenderTrack>
            </WrapperRenderTrack>
          )}
          renderThumb={({ props }) => (
            <RenderThumb
              {...props}
              style={{
                ...props.style,
              }}
            >
              <Icon name="icon-light-flash" />
              {widthScreen < 768 && (
                <OutputSlider id="output" widthValue={'100px'}>
                  {currentTarget.currentValue}
                </OutputSlider>
              )}
            </RenderThumb>
          )}
        />
        <WrapperBrakePoints>
          {points.map((p, idx) => {
            const point =
              isMoreRange && points.length - 1 === idx ? maxRange : p;
            return (
              <BrakePoints
                key={idx}
                leftPos={calcBrakePoint(point)}
                activeBrake={rangeValue >= point}
                onClick={() => {
                  handleRange([point]);
                  choseAnswer(
                    isMoreRange && points.length - 1 === idx
                      ? `більше ${points.at(-2)} кВт`
                      : `до ${point} кВт`
                  );
                }}
              >
                <Icon name="icon-light-flash" />
                {widthScreen > 767 && (
                  <QuizOutputSlider currentBrake={rangeValue === point}>
                    {isMoreRange && points.length - 1 === idx
                      ? `більше ${points.at(-2)} кВт`
                      : `до ${point} кВт`}
                  </QuizOutputSlider>
                )}
              </BrakePoints>
            );
          })}
        </WrapperBrakePoints>
      </QuizSliderBox>
      <br />
      <br />
    </QuizBodyInner>
  );
};
