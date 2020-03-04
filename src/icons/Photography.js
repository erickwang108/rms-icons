import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Photography extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10 8.309c-1.477 0-2.707 1.195-2.707 2.671 0 1.442 1.23 2.637 2.707 2.637 1.477 0 2.707-1.195 2.707-2.637 0-1.476-1.23-2.671-2.707-2.671zm7.207-2.637h-2.18c-.28 0-.597-.246-.703-.527l-.562-1.618c-.07-.28-.422-.527-.703-.527H6.94c-.28 0-.632.246-.703.527l-.562 1.618c-.106.28-.422.527-.703.527h-2.18C1.809 5.672 1 6.445 1 7.43v7.945a1.8 1.8 0 0 0 1.793 1.793h14.414A1.8 1.8 0 0 0 19 15.375V7.43c0-.985-.809-1.758-1.793-1.758zM10 15.375c-2.496 0-4.5-1.969-4.5-4.395 0-2.46 2.004-4.43 4.5-4.43s4.5 1.97 4.5 4.43c0 2.426-2.004 4.395-4.5 4.395zm6.574-6.715c-.351 0-.633-.281-.633-.598a.63.63 0 0 1 .633-.632.63.63 0 0 1 .633.633c0 .316-.281.597-.633.597z" />
      </BaseIcons>
    );
  }
}
