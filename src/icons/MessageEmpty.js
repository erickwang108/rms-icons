import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class MessageEmpty extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || ''}>
        <title>{title}</title>
        <path fillRule="evenodd" transform="translate(3 4)" d="M7 1a8.102 8.102 0 0 0-2.98.543c-.925.362-1.66.85-2.204 1.465C1.272 3.622 1 4.286 1 5c0 .583.186 1.14.559 1.668.372.529.897.986 1.574 1.371l.68.39-.211.75a5.602 5.602 0 0 1-.547 1.344 7.705 7.705 0 0 0 2.148-1.335l.336-.297.445.046C6.344 8.98 6.682 9 7 9a8.102 8.102 0 0 0 2.98-.543c.925-.362 1.66-.85 2.204-1.465C12.728 6.378 13 5.714 13 5s-.272-1.378-.816-1.992c-.545-.615-1.279-1.103-2.204-1.465A8.102 8.102 0 0 0 7 1zm7 4c0 .906-.312 1.743-.938 2.512-.625.768-1.473 1.375-2.546 1.82C9.443 9.777 8.27 10 7 10c-.365 0-.742-.02-1.133-.063a8.54 8.54 0 0 1-3.594 1.891c-.255.073-.552.13-.89.172h-.04a.312.312 0 0 1-.21-.082.398.398 0 0 1-.125-.215v-.008c-.016-.02-.017-.052-.004-.093a.21.21 0 0 0 .016-.079c-.003-.01.009-.035.035-.074l.047-.07a1.585 1.585 0 0 1 .117-.137l.242-.27.27-.296c.054-.06.135-.163.242-.309.106-.146.191-.278.254-.398.062-.12.132-.274.21-.461.079-.188.146-.386.204-.594-.818-.463-1.463-1.036-1.934-1.719C.236 6.513 0 5.781 0 5c0-.906.312-1.743.938-2.512.625-.768 1.473-1.375 2.546-1.82C4.557.223 5.73 0 7 0c1.27 0 2.443.223 3.516.668 1.073.445 1.921 1.052 2.546 1.82C13.688 3.257 14 4.094 14 5z" />
      </BaseIcons>
    );
  }
}
