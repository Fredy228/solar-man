import ico from '../../../img/ico.svg';

export const Icon = ({ name, viewBox = '0 0 32 32', width, height }) => {
  if (width || height) {
    return (
      <svg viewBox={viewBox} width={width} height={height}>
        <use xlinkHref={`${ico}#${name}`} />
      </svg>
    );
  }

  return (
    <svg viewBox={viewBox}>
      <use xlinkHref={`${ico}#${name}`} />
    </svg>
  );
};
