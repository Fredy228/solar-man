import { QuizBodyInner } from '../QuizBody.styled';
import { getTrackBackground } from 'react-range';
import { Icon } from '../../../Icon/Icon';
import {
  BrakePoints,
  CustomRange,
  QuizOutputSlider,
  QuizSliderBox,
  RenderThumb,
  RenderTrack,
  WrapperBrakePoints,
  WrapperRenderTrack,
} from './QuizBodyTree.styled';
import { OutputSlider } from '../../../CalcStation/CalcStation.styled';

export const QuizBodyTree = ({ setAnswersQuiz, widthScreen, answersQuiz }) => {
  const rangeValue = answersQuiz[2].currentAnswer[0];
  const choseAnswer = currentAnswer => {
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[2].currentValue = currentAnswer;
      return state;
    });
  };

  const handleRange = values => {
    setAnswersQuiz(prev => {
      const state = { ...prev };
      state[2].currentAnswer = values;
      return state;
    });
  };

  const fixValueRange = () => {
    setTimeout(() => {
      if (rangeValue <= 6 && rangeValue > 4) {
        handleRange([5]);
        choseAnswer('до 5 кВт');
      }
      if (rangeValue <= 15 && rangeValue > 6) {
        handleRange([10]);
        choseAnswer('до 10 кВт');
      }
      if (rangeValue <= 25 && rangeValue > 15) {
        handleRange([20]);
        choseAnswer('до 20 кВт');
      }
      if (rangeValue <= 35 && rangeValue > 25) {
        handleRange([30]);
        choseAnswer('до 30 кВт');
      }
      if (rangeValue <= 40 && rangeValue > 35) {
        handleRange([40]);
        choseAnswer('більше 30 кВт');
      }
    }, 50);
  };

  return (
    <QuizBodyInner>
      <QuizSliderBox>
        <CustomRange
          values={answersQuiz[2].currentAnswer}
          step={1}
          min={5}
          max={40}
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
                    values: answersQuiz[2].currentAnswer,
                    colors: ['#FC7300', '#CBCED4'],
                    min: 5,
                    max: 40,
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
                  {answersQuiz[2].currentValue}
                </OutputSlider>
              )}
            </RenderThumb>
          )}
        />
        <WrapperBrakePoints>
          <BrakePoints
            leftPos={'0%'}
            activeBrake={rangeValue >= 5}
            onClick={() => {
              handleRange([5]);
              choseAnswer('до 5 кВт');
            }}
          >
            <Icon name="icon-light-flash" />
            {widthScreen > 767 && (
              <QuizOutputSlider currentBrake={rangeValue === 5}>
                до 5 кВт
              </QuizOutputSlider>
            )}
          </BrakePoints>
          <BrakePoints
            leftPos={'14.28%'}
            activeBrake={rangeValue >= 10}
            onClick={() => {
              handleRange([10]);
              choseAnswer('до 10 кВт');
            }}
          >
            <Icon name="icon-light-flash" />
            {widthScreen > 767 && (
              <QuizOutputSlider currentBrake={rangeValue === 10}>
                до 10 кВт
              </QuizOutputSlider>
            )}
          </BrakePoints>
          <BrakePoints
            leftPos={'42.85%'}
            activeBrake={rangeValue >= 20}
            onClick={() => {
              handleRange([20]);
              choseAnswer('до 20 кВт');
            }}
          >
            <Icon name="icon-light-flash" />
            {widthScreen > 767 && (
              <QuizOutputSlider currentBrake={rangeValue === 20}>
                до 20 кВт
              </QuizOutputSlider>
            )}
          </BrakePoints>
          <BrakePoints
            leftPos={'71.42%'}
            activeBrake={rangeValue >= 30}
            onClick={() => {
              handleRange([30]);
              choseAnswer('до 30 кВт');
            }}
          >
            <Icon name="icon-light-flash" />
            {widthScreen > 767 && (
              <QuizOutputSlider currentBrake={rangeValue === 30}>
                до 30 Квт
              </QuizOutputSlider>
            )}
          </BrakePoints>
          <BrakePoints
            leftPos={'100%'}
            activeBrake={rangeValue >= 40}
            onClick={() => {
              handleRange([40]);
              choseAnswer('більше 30 кВт');
            }}
          >
            <Icon name="icon-light-flash" />
            {widthScreen > 767 && (
              <QuizOutputSlider currentBrake={rangeValue === 40}>
                більше 30 кВт
              </QuizOutputSlider>
            )}
          </BrakePoints>
        </WrapperBrakePoints>
      </QuizSliderBox>
      <br />
      <br />
    </QuizBodyInner>
  );
};
