import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Ifeng extends React.PureComponent {
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
        <path d="M10.726 1.032c2.85.908 4.812 2.602 5.359 5.58.285 1.553.166 3.084-.88 4.41.05-.344.107-.688.149-1.034.443-3.672-1.7-7.512-5.879-8.234-2.3-.396-4.302.298-5.923 2.007a2.9 2.9 0 0 0-.523.726c.212-.164.422-.329.635-.49 3.822-2.922 9.007-1.05 10.087 3.642.233 1.01.203 2.014-.206 2.973-.768 1.807-2.88 2.09-4.108.557-.252-.314-.447-.674-.69-.996-.438-.58-.942-.788-1.757-.707.859.65.785 1.592.956 2.462.844 4.304 5.231 5.074 8.093 3.185 2.426-1.601 3.451-4.777 2.533-7.775-.157-.516-.381-1.011-.623-1.505.298 1.241.471 2.485.206 3.746-.263 1.252-.837 2.331-1.836 3.174 1.501-3.146 1.588-6.216-.504-9.124-1.157-1.606-3.168-2.579-5.089-2.597 M13.027 10.302c-.858-.625-.85-1.486-.957-2.294-.292-2.218-2.042-4.032-4.135-4.266-2.524-.282-4.747.878-5.989 3.124C.74 9.048.798 11.86 2.142 14.113c-.796-2.722-.548-5.138 1.485-7.15l.129.04c-.067.14-.13.283-.2.423-1.272 2.582-1.343 5.191-.007 7.75 1.154 2.21 3.079 3.335 5.55 3.551-2.816-.973-4.78-2.735-5.232-5.807-.282-1.916.206-3.602.798-4.082-.008.886-.112 1.864-.009 2.82.594 5.497 6.43 8.066 10.509 5.41.729-.474 1.326-1.151 1.983-1.735l-.103-.121c-.286.223-.568.454-.86.67-3.971 2.917-9.332.643-10.023-4.245-.135-.954-.038-1.868.402-2.72.775-1.497 2.643-1.757 3.796-.525.327.349.562.782.85 1.167.42.558.956.868 1.817.743" />
      </BaseIcons>
    );
  }
}
