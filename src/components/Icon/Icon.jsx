import ico from '../../img/ico.svg'

export const Icon = ({ name, width = 'auto', height = 'auto', fill = 'currentColor', viewBox = '0 0 32 32' }) => {
   return (  
    <svg style={{width, height}} viewBox={viewBox}>
      <use xlinkHref={`${ico}#${name}`} fill={fill} />
    </svg>
  )};