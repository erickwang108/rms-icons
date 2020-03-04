import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';
import genId from './idGenerator';

export default class MultiColorInstagram extends React.PureComponent {
  static propTypes = {
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      fontSize,
      title = '',
    } = this.props;
    const id1 = genId();
    const id2 = genId();
    const id3 = genId();
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} >
        <title>{title}</title>
        <linearGradient id={id1} x1="9.154%" x2="90.846%" y1="90.847%" y2="9.153%">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="50.7%" stopColor="#F44336" />
          <stop offset="99%" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id={id2} x1="14.646%" x2="85.354%" y1="85.354%" y2="14.646%">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="50.7%" stopColor="#F44336" />
          <stop offset="99%" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id={id3} x1="14.648%" x2="85.352%" y1="85.361%" y2="14.648%">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="50.7%" stopColor="#F44336" />
          <stop offset="99%" stopColor="#9C27B0" />
        </linearGradient>
        <g fill="none" fillRule="nonzero" transform="translate(1 1)">
          <path fill={`url(#${id1})`} d="M12.375 0h-6.75A5.626 5.626 0 0 0 0 5.625v6.75A5.626 5.626 0 0 0 5.625 18h6.75A5.626 5.626 0 0 0 18 12.375v-6.75A5.626 5.626 0 0 0 12.375 0zm3.938 12.375a3.942 3.942 0 0 1-3.938 3.938h-6.75a3.942 3.942 0 0 1-3.938-3.938v-6.75a3.942 3.942 0 0 1 3.938-3.938h6.75a3.942 3.942 0 0 1 3.938 3.938v6.75z" />
          <path fill={`url(#${id2})`} d="M9 3.6a5.4 5.4 0 1 0 0 10.8A5.4 5.4 0 0 0 9 3.6zm0 8.775A3.38 3.38 0 0 1 5.625 9 3.379 3.379 0 0 1 9 5.625 3.379 3.379 0 0 1 12.375 9 3.38 3.38 0 0 1 9 12.375z" />
          <circle cx="14.4" cy="4.8" r="1.2" fill={`url(#${id3})`} />
        </g>
      </BaseIcons>
    );
  }
}

