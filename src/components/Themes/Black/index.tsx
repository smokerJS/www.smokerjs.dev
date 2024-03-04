import Line from './Line';
import Effect from './Effect';
import $ from './style.module.scss';

const BlackTheme = () => {
  return (
    <div className={$.black_theme}>
      <Line />
      <Effect />
    </div>
  );
};

export default BlackTheme;
