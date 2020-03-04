import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class InstragramVerified extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    circleColor: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      circleColor,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#f5f4f4'} circleColor={circleColor || '#000'} >
        <title>{title}</title>
        <path fillRule="evenodd" id="polygonal" d="M10 17.302L7.438 19l-1.246-2.828-3.064.03.465-3.06L1 11.493l2.029-2.32-1.3-2.803 2.948-.844.407-3.068 2.932.9L10 1l1.984 2.359 2.932-.9.407 3.067 2.948.844-1.3 2.803L19 11.493l-2.593 1.649.465 3.06-3.064-.03L12.562 19z" />
        <path fillRule="evenodd" id="word" d="M5.959 10.865l.877-1.14 2.344 1.822 3.781-4.423 1.08.986-4.69 5.413z" />
      </BaseIcons>
    );
  }
}
