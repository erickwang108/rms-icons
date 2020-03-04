import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class HKFlag extends React.PureComponent {
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
        <path fill="#D0021B" fillRule="nonzero" d="M9.2 11c-.4 0-.9-.2-1.3-.6v-.2H8c.7.7 1.5.6 2 .5l-.6-.1c-.6-.4-.3-.8-.7-1.3-.4-.5-.7-.5-1.3-.4-.5 0-.7-.4-.8-.6-.7 1.9 1.3 4.1 3.4 2.5l-.8.1zm9.5 5.3H1.3A.3.3 0 0 1 1 16V5c0-.3.1-.4.3-.4h17.4c.2 0 .3.1.3.3v11c0 .3-.1.4-.3.4zm-11-6l.1-.2h.3l-.2-.3v-.2l-.2.1-.2-.2v.3l-.2.2h.3v.3h.1zm3-.6c.4-.2.9-.4 1.5-.3v.1c-1-.1-1.6.5-1.8.9.1-.1.3-.3.5-.3.7 0 .7.5 1.3.6.6.2.9 0 1.3-.4s.7-.2 1 0c-.6-2-3.6-2.6-4.3 0l.6-.6zm1.6-.4h.1l.2.1.2-.1h.1v.3l.1.1v.1h-.3v.2h-.1l-.1-.2h-.3l.2-.2v-.3zm-2.7.6c-.1-.4-.2-.9 0-1.4 0 0 .1-.1.2 0-.4.9 0 1.6.4 2l-.2-.6c.2-.7.7-.6 1-1.2.3-.5.1-.8-.2-1.3-.2-.5 0-.8.3-1-2 0-3.4 2.8-1 4.2l-.5-.7zm0-1.7l.2-.2v-.2c-.1 0 0-.1 0 0h.2l.2-.1V8l.2.1v.1h-.3v.3H10l-.1-.3h-.3zm1.5 2.6c.4.2.7.6.8 1.2v.1h-.2c0-1-.8-1.3-1.3-1.5l.4.4c.3.7-.2.9-.2 1.5s.4.8.9 1c.5.3.4.7.3 1 1.7-1.1 1.3-4.2-1.4-4 .2 0 .5.1.7.3zm1 1.4v.3l.1.1v.1H12v.3h-.1v-.3h-.4l.2-.2v-.3l.2.1.2-.1zm-1.8-.6c-.2.4-.4.8-1 1-.1 0 0 0 0-.1.8-.4 1-1.2.9-1.7 0 .2-.1.4-.3.5-.5.4-.8 0-1.4.3-.6.2-.7.5-.8 1.1 0 .5-.5.6-.7.6 1.5 1.2 4.3 0 3.4-2.5l-.1.8zm-1 1.2l-.1.1h-.3v.2h-.1l-.1-.2h-.3l.2-.2v-.3l.2.1.2-.1s.1 0 0 0v.3l.2.1z" />
      </BaseIcons>
    );
  }
}
