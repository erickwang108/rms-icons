import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function StarEmpty(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M13.3 11.514l3.31-3.212-4.566-.671L10 3.499 7.956 7.63l-4.565.67 3.31 3.213-.79 4.555L10 13.916l4.078 2.153-.779-4.555zM19 7.653c0 .158-.094.331-.281.519l-3.927 3.83.93 5.408c.008.05.011.122.011.216 0 .36-.148.541-.443.541a.875.875 0 0 1-.433-.13L10 15.484l-4.857 2.553a.92.92 0 0 1-.433.13c-.151 0-.265-.052-.34-.157a.637.637 0 0 1-.114-.384c0-.043.007-.115.022-.216L5.208 12 1.27 8.171C1.09 7.978 1 7.805 1 7.654c0-.267.202-.433.606-.498l5.43-.79L9.47 1.444C9.607 1.148 9.784 1 10 1c.216 0 .393.148.53.444l2.434 4.921 5.43.79c.404.065.606.23.606.498z" />
    </Wrapper>
  );
}

StarEmpty.propTypes = PROP_TYPES;
StarEmpty.defaultProps = DEFAULT_PROPS;
