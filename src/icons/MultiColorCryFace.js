import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class MultiColorCryFace extends React.PureComponent {
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
        <ellipse cx="9" cy="8.992" fill="#FFDA6A" rx="9" ry="8.992" />
        <path fill="#000" fillRule="evenodd" d="M5.1 10.79c-.608 0-1.1-.536-1.1-1.198 0-.663.492-1.2 1.1-1.2.608 0 1.1.537 1.1 1.2 0 .662-.492 1.199-1.1 1.199zm7.8 0c-.608 0-1.1-.536-1.1-1.198 0-.663.492-1.2 1.1-1.2.608 0 1.1.537 1.1 1.2 0 .662-.492 1.199-1.1 1.199zm-1.156 3.364a.4.4 0 1 1-.688.408A2.382 2.382 0 0 0 9 13.388c-.859 0-1.642.455-2.072 1.175a.4.4 0 0 1-.687-.41A3.215 3.215 0 0 1 9 12.59c1.14 0 2.172.6 2.744 1.565zM3.958 7.972a.4.4 0 0 1-.716-.358c.084-.167.243-.396.489-.624.498-.463 1.145-.703 1.926-.592a.4.4 0 1 1-.114.792c-.524-.075-.936.078-1.268.385a1.756 1.756 0 0 0-.317.397zm10.8-.358a.4.4 0 1 1-.716.358 1.756 1.756 0 0 0-.318-.397c-.33-.307-.743-.46-1.267-.385a.4.4 0 1 1-.114-.792c.78-.111 1.428.13 1.926.592.246.228.405.457.489.624z" />
        <path fill="#558DFF" fillRule="evenodd" d="M14.153 17.861c.748 0 1.354-.607 1.354-1.357 0-.718-1.354-3.515-1.354-3.515S12.8 15.786 12.8 16.504c0 .75.606 1.357 1.353 1.357z" />
      </BaseIcons>
    );
  }
}
