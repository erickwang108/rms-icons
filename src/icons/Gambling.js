import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Gambling extends React.PureComponent {
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
        <path fillRule="evenodd" d="M18.162 5.019l-6.233-1.962A1.233 1.233 0 0 0 11.557 3c-.512 0-.99.317-1.157.812l-2.95 8.794c-.206.615.145 1.281.78 1.481l6.232 1.962c.123.038.249.057.372.057.512 0 .99-.317 1.157-.812L18.94 6.5c.206-.615-.144-1.282-.78-1.481zm-5.825 6.875c-2.94-3.456-1.227-5.174-.144-5.17.913.005 1.285.639 1.444 1.291.488-.519 1.21-.74 1.95-.223.88.613 1.224 2.977-3.25 4.102zm-5.81.425l2.95-8.792c.03-.09.065-.197.106-.255H6.745c-.667 0-1.234.533-1.234 1.18v9.247c0 .646.567 1.21 1.234 1.21h.97c-1.008-.47-1.536-1.552-1.188-2.59zM4.541 13.7V4.452c0-.1.017-.2.032-.296l-2.737.863A1.17 1.17 0 0 0 1.06 6.5l2.95 8.794c.167.495.646.812 1.158.812.123 0 .25-.019.373-.057l.776-.248c-1.005-.194-1.776-1.074-1.776-2.102z" />
      </BaseIcons>
    );
  }
}
