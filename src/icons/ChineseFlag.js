import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ChineseFlag extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} >
        <title>{title}</title>
        <path fill="#D0021B" fillRule="nonzero" d="M18.7 15.7H1.3a.3.3 0 0 1-.3-.3v-11c0-.3.1-.4.3-.4h17.4c.2 0 .3.1.3.3v11c0 .3-.1.4-.3.4z" />
        <path fill="#FFE15A" fillRule="nonzero" d="M4.5 6l.3.8h1v.3l-.7.5.3.9c0 .1-.1.2-.2.1l-.8-.5-.8.5-.2-.1.3-.9-.7-.5v-.3h1l.3-.9h.2zM8 6.2l.1.2h.4l-.2.3.2.3H8l-.2.2V7l-.4-.2.3-.2v-.3H8zM6.6 5.3H7L7 5h.1l.1.4h.4v.1l-.3.2V6s0 .1 0 0L7 5.9l-.3.2s-.1 0 0 0v-.4l-.2-.2v-.1zM7.2 8.7L7 9h-.4l.2.3-.2.3H7l.2.2v-.4h.4v-.2h-.3v-.4h-.1zM8.5 8h-.4L8 7.7h-.1V8h-.4s-.1.1 0 .2l.3.1-.1.4.3-.2.4.2v-.1l-.1-.3.2-.3z" />
      </BaseIcons>
    );
  }
}
