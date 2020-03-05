import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';
import { genId } from '../utils';

export default function StarRealHalf(props) {
  const {
    selectColor,
    unselectColor,
    fontSize,
  } = props;

  const wrapperRef = React.createRef();
  const idRef1 = useRef(genId());
  const idRef2 = useRef(genId());

  useEffect(() => {
    const nodeListPath = wrapperRef.current.querySelectorAll('path');
    wrapperRef.current.setAttribute('font-size', fontSize || '');
    if (nodeListPath.length > 0) {
      if (nodeListPath[0].id === `${idRef1.current}`) {
        nodeListPath[0].setAttribute('fill', unselectColor);
      }
      if (nodeListPath[1].id === `${idRef2.current}`) {
        nodeListPath[1].setAttribute('fill', selectColor);
      }
    }
  }, [props]);

  return (
    <Wrapper {...props} ref={wrapperRef}>
      <path fillRule="nonzero" id={idRef1.current} d="M10 15.484l4.857 2.553a.92.92 0 0 0 .433.13c.151 0 .265-.052.34-.157a.637.637 0 0 0 .114-.384c0-.043-.007-.115-.022-.216L14.792 12l3.938-3.83c.18-.194.27-.367.27-.518 0-.267-.202-.433-.606-.498l-5.43-.79-2.434-4.921C10.393 1.148 10.216 1 10 1v14.484z" />
      <path fillRule="nonzero" id={idRef2.current} d="M10 15.484l-4.857 2.553a.92.92 0 0 1-.433.13c-.151 0-.265-.052-.34-.157a.637.637 0 0 1-.114-.384c0-.043.007-.115.022-.216L5.208 12 1.27 8.171C1.09 7.978 1 7.805 1 7.654c0-.267.202-.433.606-.498l5.43-.79L9.47 1.444C9.607 1.148 9.784 1 10 1v14.484z" />
    </Wrapper>
  );
}

StarRealHalf.propTypes = {
  selectColor: PropTypes.string,
  fontSize: PropTypes.string,
  unselectColor: PropTypes.string,
};

StarRealHalf.defaultProps = {
  selectColor: '#FDCE02',
  unselectColor: '#EDEFF3',
  fontSize: '14px',
};
