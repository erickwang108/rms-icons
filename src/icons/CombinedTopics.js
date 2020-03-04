import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class CombinedTopics extends React.PureComponent {
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
        <path fillRule="evenodd" d="M16.676 1.5l-13.352.037C2.033 1.537 1 2.57 1 3.824v8.188C1 13.266 2.033 14.3 3.324 14.3h2.36v3.873c0 .148.111.295.259.369.037 0 .11.037.147.037.11 0 .221-.074.295-.148l3.8-4.13 6.491-.038c1.291 0 2.324-1.032 2.324-2.287V3.787C19 2.533 17.967 1.5 16.676 1.5zM5.39 11.422l.222-.774c-.554 0-.812-.148-.812-.443 0-.148.074-.258.221-.332.111-.11.332-.148.59-.148h.259L6.2 8.508h-.59c-.259 0-.443-.037-.59-.11-.148-.111-.222-.222-.222-.332 0-.148.074-.259.221-.332.111-.074.332-.148.59-.148h.849l.258-.922c.037-.184.11-.295.148-.369.074-.11.11-.184.221-.221A.926.926 0 0 1 7.455 6c.184 0 .332.037.443.11.11.074.184.185.184.296 0 .037-.037.184-.11.442l-.222.738h1.254l.295-.922c.037-.148.074-.258.11-.369a.978.978 0 0 1 .185-.221C9.704 6.037 9.816 6 10 6c.184 0 .332.037.443.11.11.074.184.185.184.296v.184c-.037.037-.037.11-.074.148v.11l-.221.775c.553 0 .811.147.811.443 0 .147-.036.258-.184.332-.148.073-.332.11-.59.11h-.295l-.332 1.217h.627c.258 0 .442.037.59.148.148.074.184.184.184.332 0 .11-.036.221-.184.332-.11.074-.332.11-.59.11h-.885l-.259.96c-.036.147-.11.258-.11.332-.037.11-.11.147-.185.22a.744.744 0 0 1-.405.111c-.222 0-.37-.036-.48-.11-.11-.11-.147-.185-.147-.332 0-.11.036-.221.073-.406l.222-.774H6.902l-.259.959c-.073.22-.147.405-.22.48-.075.11-.222.183-.48.183-.222 0-.37-.036-.48-.11-.11-.11-.147-.185-.147-.332 0-.037 0-.11.036-.185 0-.11.037-.147.037-.22zm3.394-2.914L8.45 9.725H7.16l.332-1.217h1.29zm2.176-3.91c-.148-.147-.184-.295-.221-.516a.76.76 0 0 1 .11-.553c.074-.185.222-.37.443-.554.184-.147.406-.258.627-.295a.949.949 0 0 1 .553.037.571.571 0 0 1 .406.295.904.904 0 0 1 .221.59c0 .259-.073.517-.184.849.147.037.295.037.443.074.11.036.258.073.368.073.111.037.222.037.332.037 0-.037-.037-.184-.11-.332-.037-.184-.074-.295-.074-.369 0-.11.037-.184.147-.258a.533.533 0 0 1 .259-.074c.11 0 .184.037.258.111.037.074.11.221.147.369.074.184.111.369.148.627h.885c.037.037.11.074.148.11.074.111.11.185.074.296 0 .11-.037.184-.111.258-.074.074-.185.074-.295.11h-.738c0 .185-.074.333-.11.517-.074.148-.148.295-.259.406-.11.147-.221.258-.406.405-.184.148-.368.296-.59.332-.221.074-.405.111-.59.111-.184-.037-.369-.074-.516-.147-.148-.074-.258-.185-.37-.296-.11-.147-.184-.258-.22-.405-.037-.11-.037-.258-.037-.406 0-.11 0-.258.073-.443a1.58 1.58 0 0 1 .185-.48c-.258-.073-.443-.11-.627-.184a.937.937 0 0 1-.369-.295zm1.623.59c.295.074.553.148.775.185.22.037.48.037.7.074 0 .11-.037.221-.073.332 0 .11-.074.221-.111.295l-.221.221c-.074.074-.185.11-.259.148-.11.037-.22.037-.332.037a.684.684 0 0 1-.258-.074c-.073-.037-.147-.11-.221-.185a.644.644 0 0 1-.148-.442c0-.148.037-.332.148-.59zm-.295-.848c-.148-.037-.258-.037-.332-.074a.533.533 0 0 1-.258-.073c-.074-.037-.11-.074-.148-.111a.595.595 0 0 1-.11-.332.537.537 0 0 1 .22-.332.45.45 0 0 1 .333-.148c.147.037.258.074.332.185.074.11.11.221.11.332-.036.147-.073.332-.147.553zm1.697 6.935c.147-.074.258-.111.405-.185.111-.074.185-.11.259-.147.073 0 .147-.037.184-.037.074 0 .148.037.184.074.074.036.074.11.074.184 0 .037 0 .074-.037.147 0 .037-.037.037-.073.074-.259.11-.554.185-.886.222.074.073.148.11.222.22.073.075.147.148.147.148.037.037.074.074.11.148.075.074.111.11.111.147.037.037.037.074.037.148s0 .11-.073.148c-.037.073-.111.073-.185.073a.32.32 0 0 1-.258-.147c-.11-.148-.221-.369-.369-.664a4.07 4.07 0 0 0-.332.553.772.772 0 0 0-.147.221c-.074.037-.111.037-.185.037s-.147 0-.184-.073a.28.28 0 0 1-.074-.148c0-.074 0-.11.037-.148.184-.258.369-.479.59-.663-.184-.037-.332-.037-.48-.074-.11-.037-.258-.11-.442-.148 0-.037-.037-.037-.037-.11-.037-.037-.037-.074-.037-.111 0-.074 0-.148.074-.184a.282.282 0 0 1 .184-.074c.037 0 .11.037.185.037.073.037.147.073.258.147.11.037.258.11.406.185-.037-.111-.037-.259-.074-.443 0-.184-.037-.295-.037-.332 0-.074.037-.148.074-.221.074-.037.11-.074.221-.074.074 0 .11.037.184.074.037.073.074.147.074.221 0 .037-.037.074-.037.148 0 .073 0 .184-.037.258 0 .11 0 .221-.036.369zM16.27 8.73l-.036-.111.295-.148.221.886v.11l.037.037h.037c.037 0 .074-.074.147-.147.037-.074.037-.185.037-.296.037-.11 0-.22-.037-.331-.037-.074-.11-.185-.184-.222a.772.772 0 0 0-.221-.147c-.111-.037-.185-.037-.296-.037a.712.712 0 0 0-.368.11.803.803 0 0 0-.295.185.496.496 0 0 0-.222.258c-.074.11-.074.184-.11.295 0 .11 0 .221.036.332 0 .074.037.185.074.295.074.11.148.221.222.295.11.11.22.148.368.185.111.037.259.037.406 0 .148-.037.332-.111.48-.185.147-.074.258-.184.332-.258.073-.11.11-.184.147-.295l.258-.11a.684.684 0 0 1-.073.258.595.595 0 0 1-.148.258c-.074.11-.147.184-.221.258-.11.037-.222.11-.332.184-.185.074-.37.111-.554.148-.147 0-.331 0-.479-.037-.11-.074-.258-.148-.369-.258-.11-.074-.184-.222-.258-.369a1.136 1.136 0 0 1-.11-.48c0-.184 0-.332.073-.48.037-.147.148-.294.258-.405.11-.11.258-.221.443-.295a.84.84 0 0 1 .406-.11c.147 0 .258 0 .405.036.111.037.222.111.295.185.111.11.185.221.259.332.037.11.037.221.073.332 0 .11-.036.221-.036.332-.037.11-.111.184-.185.295-.074.074-.147.147-.258.184-.074.037-.11.037-.148.037-.037 0-.073-.037-.11-.074a.378.378 0 0 1-.185.222c-.074.073-.147.073-.258.073-.074 0-.184 0-.258-.073-.074-.037-.148-.148-.221-.259a1.091 1.091 0 0 1-.074-.368c0-.148.037-.259.11-.37a.446.446 0 0 1 .259-.257c.147-.074.258-.074.368 0zm-.368.885c-.037-.11-.037-.185-.074-.295 0-.074 0-.185.037-.259a.288.288 0 0 1 .147-.147c.037 0 .074-.037.111 0h.074c.037.037.073.037.073.074.037.037.074.073.074.11.037.074.074.148.074.259 0 .11 0 .184-.037.258 0 .11-.074.147-.147.184-.037.037-.111.037-.185 0-.037-.037-.11-.11-.147-.184zM4.43 2.68l.517.295L3.139 5.78l-.332-.222L4.43 2.68zM2.734 6.074c.073.037.147.147.184.221 0 .11 0 .221-.037.295a.427.427 0 0 1-.258.185c-.074 0-.184 0-.295-.037a.662.662 0 0 1-.185-.258c0-.111 0-.185.074-.296a.25.25 0 0 1 .222-.147c.11-.037.184-.037.295.037z" />
      </BaseIcons>
    );
  }
}
