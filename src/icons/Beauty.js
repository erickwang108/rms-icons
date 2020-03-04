import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Beauty extends React.PureComponent {
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
        <path fillRule="nonzero" d="M13.063 10.674v-2.13c0-.198-.276-.316-.552-.316H7.618c-.316 0-.553.118-.553.315v2.131h-.434c-.355 0-.631.237-.631.553v7.22c0 .316.276.553.631.553h6.827c.394 0 .67-.237.67-.552v-7.221c0-.316-.315-.553-.67-.553h-.395zM7.894 5.505c0-.276.04-.79.079-1.065 0 0 0-1.105 1.302-2.368 1.342-1.223 2.368-1.065 2.368-1.065.315-.04.552.197.552.513v5.406a.54.54 0 0 1-.552.552H8.486c-.316 0-.592-.237-.592-.513v-1.46zm-.079 6.235h1.223v5.84H7.815v-5.84z" />
      </BaseIcons>
    );
  }
}
