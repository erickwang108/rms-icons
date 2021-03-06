import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Explore(props) {
  return (
    <Wrapper {...props}>
      <path stroke="#9197A3" d="M12.097 15.355a.758.758 0 00-.174.02l-4.105.985c-.312.067-.515.348-.464.642a.636.636 0 00.632.554.75.75 0 00.176-.022l4.103-.983c.312-.067.515-.348.464-.642a.634.634 0 00-.632-.554zm-.98 2.06a.638.638 0 00-.348.11c-.273.173-.535.27-.777.283H9.96a1.135 1.135 0 01-.471-.13c-.014-.006-.068-.04-.104-.061-.1-.062-.128-.079-.16-.083a.703.703 0 00-.306-.07.772.772 0 00-.412.124.693.693 0 00-.266.318c-.08.212-.005.428.199.578.46.337.998.516 1.552.516.507 0 1.01-.15 1.453-.436a.619.619 0 00.258-.311.571.571 0 000-.394.628.628 0 00-.586-.443v-.002zm3.511-10.75a4.718 4.718 0 00-1.944-1.84 5.68 5.68 0 00-2.591-.609c-.784 0-1.573.155-2.282.448-.74.302-1.394.76-1.912 1.338-.967 1.079-1.375 2.64-1.09 4.176.273 1.476 1.142 2.715 2.383 3.4.1.056.213.086.33.087a.694.694 0 00.397-.14.614.614 0 00.226-.335.556.556 0 00-.292-.663c-1.66-.916-2.132-3.12-1.617-4.638.5-1.472 2.03-2.462 3.81-2.462.75 0 1.48.18 2.11.522a3.48 3.48 0 011.717 2.167c.137.495.167 1.011.089 1.517a3.705 3.705 0 01-.546 1.433c-.226.344-.518.663-.8.97-.182.195-.37.4-.54.61-.292.36-.38.747-.468 1.12l-.047.2-3.743.926c-.313.07-.515.353-.463.648.04.272.266.55.628.55.06-.001.121-.009.18-.024l2.92-.723c.108-.027.215-.052.316-.075.8-.183 1.43-.328 1.503-1.402.027-.38.376-.735.685-1.046.079-.08.153-.155.221-.232.372-.403.833-.952 1.125-1.6.618-1.37.509-2.905-.305-4.322v-.002zM3.574 9.258c0-.335-.29-.608-.65-.608h-1.27c-.36 0-.653.272-.653.607 0 .336.292.608.653.608H2.92c.36 0 .652-.272.652-.607h.002zm14.774-.608h-1.265c-.36 0-.653.272-.653.607 0 .336.292.608.653.608h1.265c.36 0 .653-.272.653-.608 0-.335-.293-.607-.653-.607zM4.557 5.025a.688.688 0 00.923-.058.577.577 0 000-.8l-.895-.836a.688.688 0 00-.923.058.577.577 0 000 .8l.895.836zm10.936 8.468a.689.689 0 00-.923.058.577.577 0 000 .8l.895.835a.688.688 0 00.923-.058.577.577 0 000-.8l-.895-.835zM10.025 3.366c.36 0 .651-.272.651-.607v-1.18c-.017-.335-.322-.594-.682-.578-.337.014-.606.265-.622.578v1.18c0 .335.291.607.652.607zM5.48 13.493a.686.686 0 00-.921-.001l-.002.001-.895.834a.578.578 0 000 .859.688.688 0 00.923 0l.895-.833a.579.579 0 000-.86zm9.09-8.468a.686.686 0 00.921.001l.002-.001.895-.834a.578.578 0 000-.859.687.687 0 00-.923 0l-.895.833a.579.579 0 000 .86z" />
    </Wrapper>
  );
}

Explore.propTypes = PROP_TYPES;
Explore.defaultProps = DEFAULT_PROPS;
