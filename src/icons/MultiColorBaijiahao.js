import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class MultiColorBaijiahao extends React.PureComponent {
  static propTypes = {
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      fontSize,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'}>
        <title>{title}</title>
        <path d="M1 2.672h13.1L15.04 2l2.313 1.327h-6.642L8.588 6.804h3.936v-.32l3.046.418v.38c-.393.075-.826.177-1.3.304-.473.127-1.024.35-1.653.668v-.668H5.782v8.579h6.835v-2.44c.475-.19.97-.397 1.483-.618a6.283 6.283 0 0 0 1.47-.898V18h-2.953v-1.06H5.782V18H2.71V6.483c.913.15 1.62.257 2.122.321.5.065 1.102.098 1.802.098l.758-3.575H1.613L1 2.672z" fill="#000" />
        <path d="M6.22 15.845c1.022-2.392 2.46-4.252 4.31-5.58 2.779-1.992 4.899-2.225 6.037-2.36.758-.09 1.53-.119 2.313-.087-.237.808-.698 1.403-1.38 1.783a4.13 4.13 0 0 1-2.185.532c.31.115.594.195.854.24.26.047.51.056.75.028-.832.854-1.627 1.361-2.386 1.522-.76.16-1.577.217-2.453.17.102.046.226.105.37.177.146.072.405.175.78.308-.842.47-1.621.786-2.337.948-.715.162-1.527.162-2.435 0l-2.238 2.32z" fill="#155DFF" />
      </BaseIcons>
    );
  }
}
