import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Masterplate extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#76829E'}>
        <title>{title}</title>
        <path fillRule="evenodd" d="M17.186 6.747l-5.82-5.34a1.609 1.609 0 0 0-.403-.264l-.058-.024A1.642 1.642 0 0 0 10.293 1h-5.83C3.629 1 3 1.614 3 2.371v15.258C3 18.387 3.674 19 4.508 19h11.61c.833 0 1.507-.613 1.507-1.371V7.714a1.308 1.308 0 0 0-.439-.968zm-1.647.264h-3.764V3.592l3.764 3.42v-.001zm.64 10.5H4.463V2.505h5.858v4.505c0 .759.673 1.489 1.507 1.489h4.35v9.01zM9.58 10h2.925a.74.74 0 0 1 .731.75.74.74 0 0 1-.73.75H9.58a.74.74 0 0 1-.73-.75.74.74 0 0 1 .73-.75zm-2.925 0c.262 0 .503.143.634.375.13.232.13.518 0 .75a.728.728 0 0 1-.634.375.74.74 0 0 1-.73-.75.74.74 0 0 1 .73-.75zm0-3c.262 0 .503.143.634.375.13.232.13.518 0 .75a.728.728 0 0 1-.634.375.74.74 0 0 1-.73-.75.74.74 0 0 1 .73-.75zm2.925 6h2.925a.74.74 0 0 1 .731.75.74.74 0 0 1-.73.75H9.58a.74.74 0 0 1-.73-.75.74.74 0 0 1 .73-.75zm-2.925 0c.262 0 .503.143.634.375.13.232.13.518 0 .75a.728.728 0 0 1-.634.375.74.74 0 0 1-.73-.75.74.74 0 0 1 .73-.75z" />
      </BaseIcons>
    );
  }
}
