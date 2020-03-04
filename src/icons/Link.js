import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Link extends React.PureComponent {
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
        <path fillRule="nonzero" d="M9.74 7.32c.289-.49.923-.663 1.442-.375.374.202.72.49 1.037.807 2.047 2.046 2.047 5.419 0 7.465L10 17.465c-2.046 2.047-5.419 2.047-7.465 0C.488 15.42.488 12.046 2.535 10l1.124-1.124c.432-.404 1.095-.404 1.499 0 .403.432.403 1.095 0 1.499l-1.124 1.124a3.149 3.149 0 0 0 0 4.467 3.149 3.149 0 0 0 4.467 0l2.248-2.248a3.149 3.149 0 0 0 0-4.467 3.396 3.396 0 0 0-.634-.49 1.063 1.063 0 0 1-.374-1.442zM10 2.534c2.046-2.047 5.419-2.047 7.465 0 2.047 2.046 2.047 5.419 0 7.494l-1.124 1.124c-.432.403-1.095.403-1.499 0-.403-.432-.403-1.095 0-1.499l1.124-1.124a3.149 3.149 0 0 0 0-4.468 3.149 3.149 0 0 0-4.467 0L9.25 6.311a3.149 3.149 0 0 0 0 4.467c.201.202.403.346.634.49.49.288.663.923.374 1.441-.288.49-.922.663-1.44.375a5.064 5.064 0 0 1-1.067-.836c-2.047-2.046-2.047-5.419 0-7.465z" />
      </BaseIcons>
    );
  }
}
