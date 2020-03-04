import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Fans extends React.PureComponent {
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
        <path fillRule="nonzero" d="M11.866 9.548c.867-.774 1.427-1.974 1.427-3.322C13.293 3.896 11.626 2 9.577 2 7.527 2 5.86 3.896 5.86 6.226c0 1.348.56 2.548 1.427 3.322-2.285 1.038-3.905 3.576-3.905 6.54v1.408c0 .389.277.704.62.704h11.15c.342 0 .619-.315.619-.704v-1.409c0-2.964-1.62-5.5-3.905-6.539z" />
        <path fillRule="nonzero" d="M15.544 9.394c.496-.635.789-1.47.789-2.36 0-1.938-1.361-3.515-3.034-3.515-.05 0-.097.014-.147.017.263.44.463.932.592 1.46h-.006s.833 2.573-.826 4.592c.276.144 3.415 1.654 3.415 6.587h1.219c.336 0 .607-.315.607-.703v-1.088c0-2.146-1.03-4.042-2.61-4.99zM6.241 9.588c-1.66-2.019-.827-4.592-.827-4.592a5.27 5.27 0 01.592-1.46c-.05-.003-.096-.017-.147-.017-1.674 0-3.037 1.577-3.037 3.516 0 .89.293 1.724.79 2.359C2.031 10.342 1 12.238 1 14.384v1.088c0 .389.272.703.607.703h1.215c0-4.933 3.142-6.443 3.42-6.587z" />
      </BaseIcons>
    );
  }
}
