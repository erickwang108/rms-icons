import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function GeneralList(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M6.5 15.5v-2c0-.3-.1-.4-.3-.4H2.7c-.2 0-.3.1-.3.3v2.1c0 .2.1.3.3.3h3.5c.2 0 .3-.1.3-.3zm0-4.2v-2c0-.2-.1-.4-.3-.4H2.7c-.2 0-.3.2-.3.4v2c0 .2.1.4.3.4h3.5c.2 0 .3-.2.3-.4zm5.6 4.2v-2c0-.3-.2-.4-.4-.4H8.3c-.2 0-.4.1-.4.3v2.1c0 .2.2.3.4.3h3.4c.2 0 .4-.1.4-.3zM6.5 7.2v-2c0-.3-.1-.4-.3-.4H2.7c-.2 0-.3.1-.3.3v2c0 .3.1.4.3.4h3.5c.2 0 .3-.1.3-.3zm5.6 4.1v-2c0-.2-.2-.4-.4-.4H8.3c-.2 0-.4.2-.4.4v2c0 .2.2.4.4.4h3.4c.2 0 .4-.2.4-.4zm5.5 4.2v-2c0-.3-.1-.4-.3-.4h-3.5c-.2 0-.3.1-.3.3v2.1c0 .2.1.3.3.3h3.5c.2 0 .3-.1.3-.3zm-5.5-8.3v-2c0-.3-.2-.4-.4-.4H8.3c-.2 0-.4.1-.4.3v2c0 .3.2.4.4.4h3.4c.2 0 .4-.1.4-.3zm5.5 4.1v-2c0-.2-.1-.4-.3-.4h-3.5c-.2 0-.3.2-.3.4v2c0 .2.1.4.3.4h3.5c.2 0 .3-.2.3-.4zm0-4.1v-2c0-.3-.1-.4-.3-.4h-3.5c-.2 0-.3.1-.3.3v2c0 .3.1.4.3.4h3.5c.2 0 .3-.1.3-.3zM19 3.7v11.8c0 1-.8 1.7-1.7 1.7H2.7c-1 0-1.7-.7-1.7-1.7V3.7C1 2.7 1.8 2 2.7 2h14.6c1 0 1.7.8 1.7 1.7z" />
    </Wrapper>
  );
}

GeneralList.propTypes = PROP_TYPES;
GeneralList.defaultProps = DEFAULT_PROPS;
