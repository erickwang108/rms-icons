import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Finance extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      title,
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || ''}>
        <title>{title}</title>
        <path fillRule="evenodd" d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm2.454 12.475c-.443.497-1.082.789-1.918.877v1.273H9.47v-1.267c-1.394-.143-2.256-.953-2.59-2.43l1.649-.43c.153.929.658 1.392 1.516 1.392.401 0 .698-.098.887-.297.189-.2.283-.439.283-.72 0-.291-.094-.512-.283-.661-.19-.15-.61-.34-1.262-.572-.585-.203-1.043-.403-1.373-.603a2.269 2.269 0 0 1-.803-.832c-.206-.359-.309-.776-.309-1.25 0-.624.185-1.185.552-1.684.367-.497.945-.802 1.733-.913v-.983h1.066v.983c1.191.143 1.962.817 2.313 2.022l-1.468.602c-.287-.826-.728-1.24-1.328-1.24-.301 0-.543.093-.724.277a.92.92 0 0 0-.274.672c0 .268.088.473.264.617.175.143.551.32 1.127.532.633.23 1.13.45 1.489.655.36.205.647.49.862.851.214.363.322.786.322 1.27 0 .744-.222 1.364-.665 1.859z" />
      </BaseIcons>
    );
  }
}
