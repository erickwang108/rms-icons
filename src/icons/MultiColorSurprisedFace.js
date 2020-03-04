import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class MultiColorSurprisedFace extends React.PureComponent {
  static propTypes = {
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      fontSize,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} >
        <title>{title}</title>
        <ellipse cx="9" cy="8.992" fill="#FFDA6A" rx="9" ry="8.992" />
        <path fill="#000" d="M9 16.186c-1.436 0-2.6-1.61-2.6-3.597 0-1.987 1.164-3.597 2.6-3.597 1.436 0 2.6 1.61 2.6 3.597 0 1.986-1.164 3.597-2.6 3.597zM4.606 8.688c-.7-.123-1.125-1.026-.95-2.016.174-.99.883-1.692 1.582-1.569.7.124 1.125 1.026.95 2.016-.174.99-.882 1.692-1.582 1.57zm8.865 0c-.7.123-1.408-.58-1.582-1.569-.175-.99.25-1.892.95-2.016.7-.123 1.408.58 1.582 1.57.175.99-.25 1.892-.95 2.015zM4.057 3.07a.3.3 0 0 1-.469-.374c.078-.097.215-.23.413-.36.585-.383 1.313-.482 2.14-.128a.3.3 0 1 1-.237.55c-.631-.27-1.149-.199-1.573.08a1.485 1.485 0 0 0-.274.232zm10.432-.374a.3.3 0 1 1-.468.374 1.485 1.485 0 0 0-.274-.232c-.425-.279-.943-.35-1.574-.08a.3.3 0 0 1-.236-.55c.827-.354 1.554-.255 2.139.129.198.13.336.262.413.359z" />
      </BaseIcons>
    );
  }
}
