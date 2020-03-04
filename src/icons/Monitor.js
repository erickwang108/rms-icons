import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Monitor extends React.PureComponent {
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
        <path fillRule="nonzero" d="M16.213 3H3.67C2.161 3 1 4.161 1 5.671v7.2c0 1.51 1.161 2.67 2.671 2.67h9.29a.5.5 0 0 0 .465-.464.5.5 0 0 0-.465-.464h-9.29c-1.045 0-1.858-.813-1.858-1.742v-1.626h2.555l1.277 2.09a.639.639 0 0 0 .58.349.639.639 0 0 0 .581-.349l3.484-5.69h.233l1.974 3.6h5.574v1.626c0 .929-.697 1.742-1.626 1.742-.232 0-.464.232-.348.464 0 .233.232.465.464.349A2.661 2.661 0 0 0 19 12.755V5.67C18.884 4.161 17.723 3 16.213 3zm-3.252 7.316L11.22 7.065c.116-.233.233-.465.233-.697 0-.697-.581-1.278-1.278-1.278-.697 0-1.277.581-1.277 1.278 0 .348.116.697.348.929l-3.02 5.11-1.393-2.09h-3.02V5.67c0-1.045.814-1.858 1.859-1.858h12.542c1.045 0 1.858.813 1.858 1.858v4.645h-5.11zm0 6.736H6.923a.5.5 0 0 0-.465.464.5.5 0 0 0 .465.465h6.038a.5.5 0 0 0 .465-.465.5.5 0 0 0-.465-.464z" />
      </BaseIcons>
    );
  }
}
