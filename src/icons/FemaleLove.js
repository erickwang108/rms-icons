import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function FemaleLove(props) {
  return (
    <Wrapper {...props}>
      <path d="M12.67 19H1c0-4.418 4.03-8 9-8h.006c-.96.374-1.506 1.254-1.506 2.508 0 1.39 1.228 2.552 1.272 2.593L12.67 19zM10 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm4.5 9a.306.306 0 0 1-.221-.094l-3.134-3.135c-.04-.037-1.145-1.084-1.145-2.334 0-1.526.899-2.437 2.4-2.437.88 0 1.703.719 2.1 1.125.397-.406 1.22-1.125 2.1-1.125 1.501 0 2.4.911 2.4 2.438 0 1.25-1.105 2.296-1.15 2.343l-3.129 3.125A.306.306 0 0 1 14.5 19z" fill="#525D75" />
    </Wrapper>
  );
}

FemaleLove.propTypes = PROP_TYPES;
FemaleLove.defaultProps = DEFAULT_PROPS;
