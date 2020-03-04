import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Sport extends React.PureComponent {
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
        <path fillRule="nonzero" d="M7.117 9.196L10 7.107l2.883 2.09-1.095 3.374H8.222L7.117 9.196zm-.613-7.483A8.798 8.798 0 0 1 10 1c1.219 0 2.384.238 3.496.713a9.041 9.041 0 0 1 2.872 1.919 9.041 9.041 0 0 1 1.919 2.872A8.798 8.798 0 0 1 19 10a8.798 8.798 0 0 1-.713 3.496 9.041 9.041 0 0 1-1.919 2.872 9.041 9.041 0 0 1-2.872 1.919A8.798 8.798 0 0 1 10 19a8.798 8.798 0 0 1-3.496-.713 9.041 9.041 0 0 1-2.872-1.919 9.041 9.041 0 0 1-1.919-2.872A8.798 8.798 0 0 1 1 10c0-1.219.238-2.384.713-3.496a9.041 9.041 0 0 1 1.919-2.872 9.041 9.041 0 0 1 2.872-1.919zm9.714 12.847A7.522 7.522 0 0 0 17.714 10v-.03l-1.024.894-2.411-2.25.633-3.245 1.346.121c-1.005-1.38-2.307-2.324-3.908-2.833l.533 1.246L10 5.5 7.117 3.903l.533-1.246c-1.6.51-2.903 1.453-3.908 2.833l1.356-.12.623 3.244-2.41 2.25-1.025-.894V10c0 1.68.499 3.2 1.496 4.56l.302-1.326 3.274.402 1.396 2.993-1.165.694a7.575 7.575 0 0 0 2.411.391c.824 0 1.627-.13 2.41-.391l-1.164-.694 1.396-2.993 3.274-.402.302 1.326z" />
      </BaseIcons>
    );
  }
}
