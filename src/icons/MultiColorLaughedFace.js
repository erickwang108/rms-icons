import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';
import genId from './idGenerator';

export default class MultiColorLaughedFace extends React.PureComponent {
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
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'}>
        <title>{title}</title>
        <path id={id1} d="M2.8 9.192h12.523a6.299 6.299 0 0 1-6.261 5.595A6.299 6.299 0 0 1 2.8 9.192z" />
        <ellipse cx="9" cy="8.992" fill="#FFDA6A" rx="9" ry="8.992" />
        <path fill="#000" fillRule="nonzero" d="M3.621 5.353a.4.4 0 1 1 .358-.715l2.2 1.1a.4.4 0 0 1 0 .714l-2.2 1.1a.4.4 0 0 1-.358-.716l2.2-1.099v.715l-2.2-1.099zm10.6-.715a.4.4 0 0 1 .358.715l-2.2 1.1v-.716l2.2 1.1a.4.4 0 1 1-.358.714l-2.2-1.099a.4.4 0 0 1 0-.715l2.2-1.099z" />
        <mask id={id2} fill="#fff"><use xlinkHref={`#${id1}`} /></mask>
        <use fill="#000" xlinkHref={`#${id1}`} />
        <ellipse cx="9.1" cy="14.687" fill="#F55065" mask={`url(#${id2})`} rx="7.7" ry="3.897" />
      </BaseIcons>
    );
  }
}
