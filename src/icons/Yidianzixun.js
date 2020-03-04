import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Yidianzixun extends React.PureComponent {
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
        <path d="M3.81 1.032a3.22 3.22 0 0 0-2.075 1.19c-.119.147-.23.291-.252.317-.09.108-.32.659-.4.944L1 3.789v12.504l.1.317c.116.378.304.756.505 1.03.188.26.573.642.793.793.26.176.742.393 1.081.483l.296.079H16.206l.292-.08a3.39 3.39 0 0 0 1.531-.878c.483-.469.847-1.215.93-1.907.054-.414.054-11.783.004-12.233-.062-.533-.303-1.131-.649-1.603-.3-.415-.955-.905-1.394-1.045a1.034 1.034 0 0 1-.173-.072c-.047-.033-.303-.098-.573-.145C15.92.99 4.099.99 3.81 1.032zm6.638 3.553c.23.112.418.325.515.58.072.195.072.256.065 4.67l-.01 4.476-.098.183c-.252.483-.8.721-1.308.573-.368-.104-.598-.313-.764-.684-.061-.134-.065-.346-.076-3.067l-.01-2.922-.35-.022a14.267 14.267 0 0 0-.854-.025c-.558 0-.685-.036-.912-.248-.335-.314-.35-.926-.032-1.258.065-.068.263-.191.44-.277a7.1 7.1 0 0 0 .612-.343c.317-.209.987-.854 1.258-1.214.418-.555.951-.703 1.524-.422zm3.654 7.704c.317.069.508.17.724.386.548.547.562 1.43.032 1.989-.652.688-1.78.573-2.266-.234-.469-.782-.09-1.82.767-2.094.332-.104.433-.112.743-.047z" />
      </BaseIcons>
    );
  }
}
