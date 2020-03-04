import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Health extends React.PureComponent {
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
        <path fillRule="evenodd" d="M13.857 5.977V2.974c0-.536-.395-.974-.909-.974H7.182c-.514 0-1.321.438-1.321.974v3.003h-3.9A.977.977 0 0 0 1 6.951v10.147c0 .538.444.973.961.973h16.13c.516 0 .909-.435.909-.973V6.95c0-.537-.393-.974-.91-.974h-4.233zm-6.39 0h5.143V3.3H7.467v2.678zm5.767 7.387h-1.948v2.029H8.714v-2.03H6.766v-2.678h1.948V8.656h2.572v2.03h1.948v2.678z" />
      </BaseIcons>
    );
  }
}
