import { ProgressBar } from 'react-loader-spinner';

export const LoadSpiner = ({
  borderColor,
  barColor,
  height = 30,
  width = 30,
}) => {
  return (
    <ProgressBar
      height={height}
      width={width}
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor={borderColor}
      barColor={barColor}
    />
  );
};
