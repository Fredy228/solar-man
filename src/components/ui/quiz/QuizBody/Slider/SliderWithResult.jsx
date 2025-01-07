import { QuizBodyInner } from '../QuizBody.styled';
import { getTrackBackground, Range } from 'react-range';
import { Icon } from '../../../../reused/icon/Icon';
import { QuizSliderBox, ResultItem, ResultList } from './Slider.styled';
import {
  OutputSlider,
  TextResult,
} from '../../../home/calc-station/CalcStation.styled';

export const SliderWithResult = ({
  setAnswersQuiz,
  answersQuiz,
  currentQuestion,
}) => {
  const currentTarget = answersQuiz[currentQuestion - 1];
  const rangeValue = currentTarget.currentIdx;
  const metrics = currentTarget.metrics || 'кВт';
  const maxRange =
    rangeValue[0] > currentTarget.before ? rangeValue[0] : currentTarget.before;

  const listResult = currentTarget.calc
    ? currentTarget.calc(rangeValue[0])
    : [];

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

    let result = `${values[0]} ${metrics}`;
    if (values[0] >= currentTarget.before)
      result = `більше ${values[0]} ${metrics}`;
    // if (values[0] <= currentTarget.from) result = `до ${values[0]} кВт`;

    choseAnswer(result);
  };

  return (
    <QuizBodyInner>
      <QuizSliderBox>
        <Range
          values={rangeValue}
          step={currentTarget.step || 1}
          min={currentTarget.from}
          max={maxRange}
          onChange={values => handleRange(values)}
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
                    values: rangeValue,
                    colors: ['#FC7300', '#E5E7EB'],
                    min: currentTarget.from,
                    max: maxRange,
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
              <OutputSlider id="output">
                {currentTarget.currentValue}
              </OutputSlider>
            </div>
          )}
        />
      </QuizSliderBox>
      <ResultList>
        {listResult.map((i, idx) => (
          <ResultItem key={idx}>
            <TextResult>{i[0]}</TextResult>
            <span>{i[1]}</span>
          </ResultItem>
        ))}
      </ResultList>

      <br />
      <br />
    </QuizBodyInner>
  );
};
