import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Politics(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M16.33 1H3.501A.5.5 0 0 0 3 1.484v13.5c0 .177.106.34.26.425l6.42 3.532a.49.49 0 0 0 .466 0l6.404-3.532a.476.476 0 0 0 .241-.425v-13.5c0-.267-.195-.484-.462-.484zm-.503 13.697l-5.931 3.267-5.932-3.267V1.97h11.863v12.728zM13.9 13.98v-2.276l-4 2.119-4.01-2.12v2.271l4.01 2.2 4-2.194zm0-3.37V8.335l-4 2.118-4.01-2.118v2.27l4.01 2.2 4-2.195zM8.295 8.384l1.792-1.368 1.791 1.37-.684-2.21 1.792-1.363H10.77l-.684-2.215-.685 2.215H7.188l1.791 1.363-.684 2.208z" />
    </Wrapper>
  );
}

Politics.propTypes = PROP_TYPES;
Politics.defaultProps = DEFAULT_PROPS;
