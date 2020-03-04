import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Construction extends React.PureComponent {
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
        <path fillRule="evenodd" d="M3.207 11.296h13.061c.446.308.743.801.743 1.372 0 .924-.78 1.679-1.765 1.679h-.056c-.167 1.279-.817 2.388-1.746 3.22-.204.17-.409.34-.631.478a5.864 5.864 0 0 1-.892.477A5.77 5.77 0 0 1 9.598 19c-.836 0-1.616-.17-2.322-.478a5.853 5.853 0 0 1-.892-.477c-.223-.139-.427-.308-.631-.478a5.295 5.295 0 0 1-1.765-3.236c-.855-.123-1.524-.816-1.524-1.663 0-.57.298-1.064.743-1.372zm7.778-2.592H8.663a.923.923 0 0 1-.725-.352.852.852 0 0 1-.148-.475v-6.05c0-.036.018-.07.018-.106.037-.404.409-.721.855-.721h2.043c.483 0 .91.299 1.078.704.037.123.074.246.074.386v5.787a.72.72 0 0 1-.111.387.862.862 0 0 1-.762.44zm5.487-.915l.13.387h1.046v2.198H2V8.176h1.059l.13-.387c.576-1.812 2.1-3.658 4.032-4.626v4.714c0 .07 0 .123.018.193.037.194.093.37.204.528.242.387.706.65 1.226.65h2.341a1.47 1.47 0 0 0 1.282-.756c.093-.175.13-.351.149-.545V3.181c1.932.95 3.455 2.796 4.031 4.608z" />
      </BaseIcons>
    );
  }
}
