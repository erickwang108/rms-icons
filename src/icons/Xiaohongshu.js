import React from 'react';
import PropTypes from 'prop-types';

class Xiaohongshu extends React.Component {
  static propTypes = {
    innerColor: PropTypes.string,
    outerColor: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };

  static defaultProps = {
    innerColor: '#ffffff',
    outerColor: '#888888',
    fontSize: '20px',
  };

  render() {
    const {
      innerColor,
      fontSize,
      outerColor,
      title = '',
    } = this.props;

    return (
      <svg width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize}>
        <title>{title}</title>
        <rect fill={outerColor} width="18" height="18" rx="4" />
        <path fill={innerColor} d="M2.365 7.446s.017 3.293-.77 3.63L1 9.987s.353-1.095.257-2.541h1.108zm3.599 0c-.096 1.446.257 2.541.257 2.541l-.594 1.09c-.788-.338-.772-3.631-.772-3.631h1.109zm-2.9 3.312V6H4.15v4.835s-.03.812-.74.812h-.353s-.69-.073-.69-.89h.698zm3.73-2.316C6.28 8.42 6.6 7.788 6.6 7.788L7.49 6h1.039l-.746 1.423a.102.102 0 0 0 .09.149h.07l.061-.126h1.039L8.147 9.2a.102.102 0 0 0 .09.148h.6l-.48.87H7.158c-.514-.02-.193-.653-.193-.653l.551-1.124h-.722zm.158 2.128h1.413l-.57 1.08H6.462c-.18 0-.27-.12-.27-.12l.539-1.036c.088.088.22.076.22.076zm4.03-3.124v3.16h1.038v1.04H8.365l.517-1.04H9.91v-3.16h-.696V6.343h2.453v1.103h-.686zm5.943-.579c0 .29-.235.525-.525.525h-.524v-.525a.525.525 0 0 1 1.049 0zm-1.03 1.393c.577 0 1.046.468 1.046 1.047v1.43a.91.91 0 0 1-.91.91h-.273a.91.91 0 0 1-.91-.91h1.011V9.601a.26.26 0 0 0-.26-.26h-1.458v2.306h-1.06V9.34h-1.06V8.26h1.06v-.842h-.666V6.336h.665V6h1.06v.336h.418c.668 0 1.21.542 1.21 1.21v.714h.126zm-1.754-.842v.842h.545v-.677a.165.165 0 0 0-.164-.165h-.381z" />
      </svg>
    );
  }
}

export default Xiaohongshu;
