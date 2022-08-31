import React from 'react';
import './styles.css';

// props - gap, direction, width, height, curvedEdge, bgColor, alignItems, justifyContent
const Flex = (props) => {
  function buildCSS() {
    let cssClass = ['flex'];
    if (props.direction === 'column') {
      cssClass.push('flex--column');
    }
    switch (props.gap) {
      case 'sm':
        cssClass.push('flex--gap-sm');
        break;
      case 'md':
        cssClass.push('flex--gap');
        break;
      case 'lg':
        cssClass.push('flex--gap-lg');
      default:
    }

    if (props.width === 'match-parent') {
      cssClass.push('flex--width-match-parent');
    }

    if (props.height === 'match-parent') {
      cssClass.push('flex--height-match-parent');
    }

    switch (props.curvedEdge) {
      case 'true':
        cssClass.push('flex--curved-edges');
        break;
      case 'round':
        cssClass.push('flex--round-edges');
        break;
    }

    switch (props.bgColor) {
      case 'prim-50':
        cssClass.push('flex--bg-prim-50');
        break;
      case 'prim':
        cssClass.push('flex--bg-prim');
        break;
      case 'sec':
        cssClass.push('flex--bg-sec');
        break;
      default:
    }

    switch (props.alignItems) {
      case 'center':
        cssClass.push('flex--align-center');
        break;
      case 'space-between':
        cssClass.push('flex--align-space-between');
        break;
      case 'flex-start':
        cssClass.push('flex--align-flex-start');
        break;
      case 'flex-end':
        cssClass.push('flex--align-flex-end');
        break;
      default:
    }

    switch (props.justifyContent) {
      case 'center':
        cssClass.push('flex--justify-center');
        break;
      case 'space-between':
        cssClass.push('flex--justify-space-between');
        break;
      case 'flex-start':
        cssClass.push('flex--justify-flex-start');
        break;
      case 'flex-end':
        cssClass.push('flex--align-flex-end');
        break;
      default:
    }

    return cssClass.join(' ');
  }

  return <div className={buildCSS()}>{props.children}</div>;
};

export default Flex;
