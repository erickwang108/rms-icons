import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Upload extends React.PureComponent {
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
        <path fillRule="evenodd" d="M19 14.347s-.06-.179-.18-.358l-2.64-5.242c-.12-.179-.36-.358-.6-.358h-2.16c-.24 0-.42.179-.42.417v.715c0 .238.18.418.42.418h.72c.24 0 .48.178.6.357l1.86 3.754c.12.178 0 .357-.24.357h-2.94c-.24 0-.42.179-.42.417v2.146a.41.41 0 0 1-.42.417H7.42A.411.411 0 0 1 7 16.97v-2.146a.41.41 0 0 0-.42-.417h-3c-.24 0-.3-.179-.24-.357l1.92-3.754c.12-.178.36-.357.6-.357h.66a.41.41 0 0 0 .42-.418v-.655a.409.409 0 0 0-.42-.417H4.36c-.24 0-.48.178-.6.357L1.18 13.99c-.12.18-.18.358-.18.358v4.11c0 .239.18.418.42.418h17.16a.41.41 0 0 0 .42-.417v-4.11zM6.28 6.602H8.5v6.256h3V6.602h2.34c.24 0 .3-.12.12-.297l-3.72-4.171c-.12-.179-.42-.179-.54 0l-3.6 4.17c-.12.179-.06.298.18.298z" />
      </BaseIcons>
    );
  }
}
