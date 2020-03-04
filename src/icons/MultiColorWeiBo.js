import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class MultiColorWeiBo extends React.PureComponent {
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
        <path fillRule="evenodd" fill="#E6162D" d="M9.043 17.58c4.442 0 8.009-2.323 8.009-5.19 0-2.42-3.032-2.42-3.032-2.576 0-.157 1.51-1.563 0-2.439-1.51-.875-4.272.456-4.189.313C11.02 5.645 9.321 5 8.456 5 6.393 5 1 9.525 1 12.39c0 2.867 3.601 5.19 8.043 5.19z" />
        <ellipse cx="8.16" cy="13.418" fill="#FFF" rx="5.189" ry="3.373" />
        <path fillRule="evenodd" fill="#1E222A" d="M8.592 16.163c-1.688.328-3.278-.546-3.552-1.953-.273-1.407.874-2.813 2.562-3.141 1.687-.328 3.277.546 3.55 1.953.274 1.406-.872 2.813-2.56 3.14zm.055-2.578a.519.519 0 1 0 0-1.038.519.519 0 0 0 0 1.038zM7.45 14.768c.52-.242.794-.754.612-1.144-.182-.39-.75-.509-1.27-.267-.52.243-.793.755-.611 1.144.181.39.75.51 1.27.267z" />
        <path fillRule="evenodd" fill="#F93" d="M16.054 6.094c.938.844.551 2.261.551 2.261a.595.595 0 0 1-.578.49h-.102c-.264 0-.434-.215-.357-.48 0 0 .36-.833-.14-1.427-.5-.594-1.402-.455-1.402-.455a.49.49 0 0 1-.507-.488v.124c0-.281.221-.535.494-.572 0 0 1.103-.297 2.04.547zm1.75-1.688c1.72 1.626 1.175 4.408 1.175 4.408-.037.382-.396.687-.784.687h.032a.59.59 0 0 1-.604-.688s.431-1.719-.6-3.2c-1.032-1.48-3.33-1.225-3.33-1.225A.673.673 0 0 1 13 3.713c0-.372.313-.697.7-.702 0 0 2.385-.23 4.104 1.395z" />
      </BaseIcons>
    );
  }
}
