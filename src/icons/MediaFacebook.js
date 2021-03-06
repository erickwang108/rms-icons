import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MediaFacebook(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M18.004 1c.273 0 .508.098.703.293.195.195.293.43.293.703v16.008a.959.959 0 0 1-.293.703.959.959 0 0 1-.703.293h-4.582v-6.973h2.332l.351-2.718h-2.683V7.574c0-.437.092-.765.275-.984.184-.219.541-.328 1.073-.328l1.43-.012V3.824c-.493-.07-1.188-.105-2.087-.105-1.062 0-1.912.312-2.549.937-.636.625-.955 1.508-.955 2.649v2.004H8.266v2.718h2.343V19H1.996a.959.959 0 0 1-.703-.293.959.959 0 0 1-.293-.703V1.996c0-.273.098-.508.293-.703A.959.959 0 0 1 1.996 1h16.008z" />
    </Wrapper>
  );
}

MediaFacebook.propTypes = PROP_TYPES;
MediaFacebook.defaultProps = DEFAULT_PROPS;
