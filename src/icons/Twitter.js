import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Twitter extends React.PureComponent {
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
        <path d="M9.74 6.957l.039.643-.65-.078C6.762 7.22 4.694 6.195 2.938 4.475l-.859-.853-.22.63c-.469 1.405-.17 2.889.806 3.887.52.551.403.63-.494.302-.313-.105-.586-.184-.612-.145-.09.092.221 1.287.468 1.76.339.656 1.028 1.3 1.782 1.68l.638.302-.755.014c-.728 0-.754.013-.676.288.26.854 1.288 1.76 2.432 2.154l.806.276-.702.42a7.323 7.323 0 0 1-3.486.971c-.585.014-1.066.066-1.066.105 0 .132 1.587.867 2.51 1.156 2.77.853 6.06.486 8.532-.972 1.756-1.037 3.512-3.099 4.331-5.094.442-1.064.884-3.007.884-3.94 0-.603.04-.682.768-1.404.429-.42.832-.88.91-1.011.13-.25.117-.25-.546-.027-1.105.394-1.262.342-.715-.25.403-.42.884-1.18.884-1.404 0-.04-.195.026-.416.144-.234.132-.754.329-1.145.447l-.702.223-.637-.433c-.351-.237-.846-.5-1.106-.578-.663-.184-1.678-.158-2.276.052-1.626.591-2.653 2.114-2.536 3.782z" />
      </BaseIcons>
    );
  }
}
