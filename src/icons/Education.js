import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Education extends React.PureComponent {
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
        <path fillRule="evenodd" d="M16.062 8.954l-5.349 3.171-5.247-3.17-.436 2.705a.62.62 0 0 0-.086.307c0 .956 4.426 3.845 5.769 3.845 1.346 0 5.874-2.885 5.874-3.845 0-.101-.033-.203-.087-.506l-.438-2.507zm-5.308 2.61L2.533 6.613 10.776 4 19 6.574l-8.246 4.99zM2.587 7.051L1 14.38l1.26-1.677.939 1.84-.612-7.493z" />
      </BaseIcons>
    );
  }
}
