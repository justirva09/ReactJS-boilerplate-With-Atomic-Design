import {React, PropTypes} from 'libraries';

const View = ({
  id,
  classNames,
  onPress,
  style,
  children,
  ...props
}) => (
  <div
    id={id}
    className={classNames}
    onClick={onPress}
    style={style}
    {...props}
  >
    {children}
  </div>
);

View.propTypes = {
  id: PropTypes.string,
  classNames: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  children: PropTypes.any,
};

export default View;
