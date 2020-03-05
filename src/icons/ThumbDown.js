import React from 'react';

import Wrapper from '../Wrapper';

export default function ThumbDown(props) {
  return (
    <Wrapper {...props}>
      <circle cx="10" cy="10" r="9" stroke="#FFF" />
      <path fillRule="evenodd" d="M12.455 2H5.09c-.655 0-1.227.41-1.473.982L1.164 8.79c-.082.164-.164.327-.164.573V11c0 .9.736 1.636 1.636 1.636h5.155L6.973 16.4v.245c0 .328.163.655.327.9l.9.819 5.4-5.4c.327-.328.49-.737.49-1.146V3.636c0-.9-.735-1.636-1.635-1.636zm3.272 0v9.818H19V2h-3.273z" />
    </Wrapper>
  );
}
