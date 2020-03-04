import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Animals extends React.PureComponent {
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
        <path fillRule="evenodd" d="M6.927 7.614c1.301 0 2.385-1.481 2.385-3.325C9.312 2.482 8.228 1 6.927 1 5.59 1 4.505 2.482 4.505 4.29c0 1.843 1.085 3.324 2.422 3.324zm5.71 0c1.338 0 2.422-1.481 2.422-3.325C15.06 2.482 13.975 1 12.638 1c-1.301 0-2.386 1.482-2.386 3.29 0 1.843 1.085 3.324 2.386 3.324zm4.483-1.662c-1.049-.217-2.06.759-2.35 2.168-.253 1.41.362 2.675 1.374 2.892 1.048.217 2.096-.723 2.35-2.132.288-1.446-.326-2.711-1.374-2.928zM4.794 8.12c-.289-1.41-1.3-2.385-2.35-2.168C1.398 6.169.783 7.434 1.072 8.88c.253 1.41 1.302 2.349 2.35 2.132 1.012-.217 1.626-1.482 1.373-2.892zm8.603 3.651c-.253-1.807-1.771-3.18-3.615-3.18-1.807 0-3.325 1.373-3.614 3.18a3.724 3.724 0 0 0-2.205 3.434C3.963 17.3 5.59 19 7.613 19c.832 0 1.555-.29 2.17-.723.614.434 1.337.723 2.168.723 2.024 0 3.65-1.699 3.65-3.795a3.724 3.724 0 0 0-2.204-3.434z" />
      </BaseIcons>
    );
  }
}
