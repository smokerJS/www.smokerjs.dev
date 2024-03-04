import $ from './style.module.scss';
import classNames from 'classnames';

const Line = () => {
  return (
    <div className={$.line}>
      <div className={$.background_line}></div>
      <div className={classNames([$.background_line_over, $.animation_1])}></div>
      <div className={classNames([$.background_line_over, $.animation_2])}></div>
      <div className={classNames([$.background_line_over, $.animation_3])}></div>
    </div>
  );
};

export default Line;
