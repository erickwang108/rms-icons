import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Entertainment extends React.PureComponent {
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
        <path fillRule="evenodd" d="M14.194 6.749h-2.065c0-.43-.329-.807-.822-1.017l1.27-1.994a.547.547 0 0 0 .63-.544.546.546 0 0 0-.542-.552.546.546 0 0 0-.54.552c0 .113.032.217.089.305L10.876 5.6a2.436 2.436 0 0 0-.948 0L7.522 1.82a.538.538 0 0 0 .083-.287A.528.528 0 0 0 7.082 1a.528.528 0 0 0-.523.533.528.528 0 0 0 .601.527l2.337 3.672c-.493.21-.821.587-.821 1.017H6.61C4.617 6.749 3 8.398 3 10.432v4.052c0 1.716 1.15 3.158 2.707 3.567-.016.3-.024.949.212.949.209 0 .554-.507.754-.832h7.458c.2.325.546.832.755.832.236 0 .228-.649.211-.949 1.557-.409 2.708-1.85 2.708-3.567v-4.052c0-2.034-1.617-3.683-3.611-3.683zm-.737 9.267H5.458a.717.717 0 0 1-.71-.724V9.63c0-.4.318-.724.71-.724h8c.39 0 .709.324.709.724v5.663c0 .4-.318.724-.71.724zm2.22-1.286a.848.848 0 0 1-.84-.856c0-.473.375-.857.84-.857.463 0 .839.384.839.857a.848.848 0 0 1-.84.856zm0-3.317a.848.848 0 0 1-.84-.856c0-.473.375-.857.84-.857.463 0 .839.384.839.857a.848.848 0 0 1-.84.856z" />
      </BaseIcons>
    );
  }
}
