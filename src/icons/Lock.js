import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Lock extends React.PureComponent {
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
        <path d="M2.212 6.976V4.823C2.212 2.239 4.107 0 6.635 0h1.264c2.37 0 4.423 2.067 4.423 4.823v2.153h.632c.948 0 1.422.69 1.422 1.55v7.924c.158.861-.474 1.55-1.264 1.55H1.422C.632 18 0 17.311 0 16.45V8.526c0-.86.79-1.55 1.422-1.55h.79zm8.688 0V4.823C10.9 2.928 9.478 1.55 7.9 1.55H6.635c-1.738 0-3.002 1.378-3.002 3.273v2.153H10.9z" />
      </BaseIcons>
    );
  }
}
