import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class People extends React.PureComponent {
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
        <path fillRule="evenodd" transform="translate(6 1)" d="M3.995 3.214c-.44 0-.812-.145-1.094-.447-.299-.309-.44-.692-.44-1.156 0-.44.141-.818.44-1.13C3.181.16 3.553 0 3.995 0c.42 0 .79.16 1.091.48.299.313.452.69.452 1.131 0 .462-.152.846-.45 1.156-.3.302-.671.447-1.093.447zM.642 4.44a2.157 2.157 0 0 1 1.506-.581h3.707c.608 0 1.103.197 1.516.583.424.4.629.869.629 1.388v4.808c0 .18-.075.344-.193.475-.13.13-.304.19-.534.19a.803.803 0 0 1-.53-.19.656.656 0 0 1-.193-.475v-4.3h-.395v10.8c0 .23-.084.441-.267.604a.932.932 0 0 1-.662.258c-.292 0-.53-.077-.716-.258a.798.798 0 0 1-.281-.604v-5.796h-.422v5.796c0 .23-.09.441-.285.604-.184.18-.411.258-.694.258a.957.957 0 0 1-.681-.258c-.207-.163-.316-.375-.316-.604v-10.8h-.377v4.3c0 .18-.064.344-.185.475-.14.13-.314.19-.54.19a.723.723 0 0 1-.511-.19.608.608 0 0 1-.218-.475V5.83c0-.52.218-.987.642-1.389z" />
      </BaseIcons>
    );
  }
}
