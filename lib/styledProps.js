'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var styledProps = function styledProps(map, fallback) {
  return function (props) {
    var keysFromProps = Object.keys(map).filter(function (key) {
      return key !== 'default' && props[key] !== undefined;
    });

    if (keysFromProps.length > 1) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error('[styledProps] Multiple props provided: ' + keysFromProps.join(', ') + '.');
      }
    }
    var keyFromProps = keysFromProps[0];
    if (map[keyFromProps]) {
      return map[keyFromProps];
    }

    if (fallback && props[fallback] && map[props[fallback]]) {
      return map[props[fallback]];
    }

    if (map.default) {
      return map.default;
    }

    if (fallback && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[styledProps] Unknown fallback prop provided: ' + fallback + '.');
    }

    return undefined;
  };
};

exports.default = styledProps;
