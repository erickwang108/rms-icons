import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Legal extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || ''}>
        <title>{title}</title>
        <path fillRule="evenodd" d="M10.734 16.495h3.015c1.404 0 1.404.584 1.404 1.304H5.557c0-.72.094-1.304.809-1.304h2.9V5.47H4.235l2.13 3.408a.372.372 0 0 1-.114.51.366.366 0 0 1-.506-.116L3.896 6.316 2.048 9.272a.366.366 0 0 1-.506.116.371.371 0 0 1-.115-.51L3.531 5.47a.571.571 0 0 1-.569-.574c0-.316.255-.573.57-.573h4.185c.236-.346.585-.609.993-.733.058-.667.613-.587 1.29-.587s1.232-.08 1.29.587c.408.124.757.387.993.733h4.186c.314 0 .569.257.569.573a.577.577 0 0 1-.596.574l2.131 3.408a.371.371 0 0 1-.115.51.365.365 0 0 1-.506-.116l-1.848-2.956-1.849 2.956a.366.366 0 0 1-.506.116.371.371 0 0 1-.115-.51l2.131-3.408h-5.03v11.025zM6.597 9.838c.108 0 .196.088.196.197 0 1.61-1.3 2.919-2.897 2.919C2.3 12.954 1 11.644 1 10.035c0-.109.088-.197.196-.197h5.401zm12.207 0c.108 0 .196.088.196.197 0 1.61-1.3 2.919-2.896 2.919-1.597 0-2.897-1.31-2.897-2.919 0-.109.088-.197.196-.197h5.401z" />
      </BaseIcons>
    );
  }
}
