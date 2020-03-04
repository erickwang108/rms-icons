import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Agriculture extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      title,
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'}>
        <title>{title}</title>
        <path d="M10.686 1.426l2.188 4.435a.765.765 0 0 0 .576.418l4.894.712a.765.765 0 0 1 .424 1.304l-3.541 3.452a.765.765 0 0 0-.22.677l.836 4.874a.765.765 0 0 1-1.11.806l-4.377-2.3a.765.765 0 0 0-.712 0l-4.377 2.3a.765.765 0 0 1-1.11-.806l.836-4.874a.765.765 0 0 0-.22-.677L1.232 8.295a.765.765 0 0 1 .424-1.304l4.894-.712a.765.765 0 0 0 .576-.418l2.188-4.435a.765.765 0 0 1 1.372 0z" stroke={color || '#FDD31C'} fill="none" fillRule="evenodd" />
      </BaseIcons>
    );
  }
}
