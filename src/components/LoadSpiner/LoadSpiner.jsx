import { ProgressBar } from 'react-loader-spinner';

export const LoadSpiner = ({ borderColor, barColor }) => {
  return (
    <ProgressBar
      height="30"
      width="30"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor={borderColor}
      barColor={barColor}
    />
  );
};
