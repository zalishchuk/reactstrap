import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isObject from 'lodash.isobject';
import { mapToCssModules } from './utils';

const widths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrBoolProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool
]);
const valueSizesProp = PropTypes.oneOfType([
  stringOrBoolProp,
  PropTypes.shape({
    xs: stringOrBoolProp,
    sm: stringOrBoolProp,
    md: stringOrBoolProp,
    lg: stringOrBoolProp,
    xl: stringOrBoolProp
  })
]);

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inline: PropTypes.bool,
  // row: PropTypes.bool,
  // column: PropTypes.bool,
  reverse: valueSizesProp,
  justify: valueSizesProp,
  direction: valueSizesProp,
  align: valueSizesProp,
  content: valueSizesProp,
  wrap: valueSizesProp,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  tag: 'div'
};

const getPropSizeClasses = (name, _value, reverse = false, map = {}) => {
  const value = map[_value] || _value;
  let suffix = reverse === true ? '-reverse' : '';

  if (isObject(value)) {
    return widths.reduce((classes, width, index) => {
      const valueWidth = map[value[width]] || value[width];
      const prefix = index ? `-${width}-` : '-';
      if (isObject(reverse) && reverse[width]) suffix = '-reverse';
      if (typeof value !== 'string') return classes;
      return [`${name}${prefix}${valueWidth}${suffix}`, ...classes];
    }, []);
  }

  if (typeof value !== 'string') return '';
  return `${name}-${value}${suffix}`;
};

const Flex = (props) => {
  const {
    className,
    cssModule,
    inline,
    // row,
    // column,
    reverse,
    content,
    direction,
    justify,
    align,
    wrap,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(
      className,
      inline ? 'd-inline-flex' : 'd-flex',
      // !direction && row && (reverse ? 'flex-row-reverse' : 'flex-row'),
      // !direction && column && (reverse ? 'flex-column-reverse' : 'flex-column'),
      justify && getPropSizeClasses('justify-content', justify),
      align && getPropSizeClasses('align-items', align),
      content && getPropSizeClasses('align-content', content),
      direction && getPropSizeClasses('flex', direction, reverse),
      typeof wrap !== 'undefined' &&
        getPropSizeClasses('flex', wrap, false, {
          true: 'wrap',
          false: 'nowrap'
        })
    ),
    cssModule
  );

  return <Tag {...attributes} className={classes} />;
};

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;
