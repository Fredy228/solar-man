import ico from '../../img/ico.svg';

export const Icon = ({ name, fill = '#000', viewBox = '0 0 32 32' }) => {
  return (
    <svg viewBox={viewBox}>
      <use xlinkHref={`${ico}#${name}`} fill={fill} />
    </svg>
  );
};
