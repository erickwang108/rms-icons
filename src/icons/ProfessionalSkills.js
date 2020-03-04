import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ProfessionalSkills extends React.PureComponent {
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
        <path fillRule="evenodd" d="M18.94 4l-.032 14.374L2 18.406 18.94 4zm-2.616 5.01l-7.88 6.85 7.858-.017.022-6.834zm-10.27 7.818v1.531h.5v-1.53h-.5zm2 0v1.531h.5v-1.53h-.5zm2 0v1.531h.5v-1.53h-.5zm2 0v1.531h.5v-1.53h-.5zm2 0v1.531h.5v-1.53h-.5zm2 0v1.531h.5v-1.53h-.5zM17.25 7.75h1.39v-.5h-1.39v.5zm0 2h1.39v-.5h-1.39v.5zm0 2h1.39v-.5h-1.39v.5zm0 2h1.39v-.5h-1.39v.5zm0 2h1.39v-.5h-1.39v.5zM2.747 10.297l2.557 2.84L2 13.541l.747-3.244zm.539-.406l7.584-6.83 2.479 2.755-7.584 6.828-2.48-2.753zm12.15-6.907a.855.855 0 0 1-.064 1.208l-1.358 1.223-2.677-2.972 1.36-1.224a.853.853 0 0 1 1.21.065l1.528 1.7z" />
      </BaseIcons>
    );
  }
}
