import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Humor extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10 1C5.046 1 1 5.017 1 9.981 1 14.945 5.046 19 10 19s9-4.055 9-9.019S14.954 1 10 1zm1.777 6.632l2.458-2.047c.19-.151.416-.113.568.038.15.19.113.455-.038.569l-2.08 1.743 2.08 1.743c.151.151.189.417.038.568a.344.344 0 0 1-.303.152c-.113 0-.19-.038-.265-.076l-2.458-2.084c-.075-.076-.15-.19-.15-.303 0-.114.075-.228.15-.303zm-6.126-1.44c-.189-.114-.189-.38-.038-.569.114-.151.379-.19.568-.038l2.458 2.047c.075.075.15.19.15.303 0 .113-.075.227-.15.303L6.18 10.322a.7.7 0 0 1-.265.076.344.344 0 0 1-.303-.152.382.382 0 0 1 .038-.568l2.08-1.743-2.08-1.743zM10 17.37c-2.685 0-4.916-2.198-4.916-4.927a.42.42 0 0 1 .416-.417h9a.42.42 0 0 1 .416.417c0 2.729-2.231 4.927-4.916 4.927z" />
      </BaseIcons>
    );
  }
}
