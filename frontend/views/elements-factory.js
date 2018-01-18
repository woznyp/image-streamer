import {warn, group, groupEnd} from '../helpers/console__helpers';
import element from './elements/Element';
import video from './elements/Video';
import canvas from './elements/Canvas';
import span from './elements/Span';

const ELEMENTS = {element,video,canvas, span};

/**
 * Creates new object with given DOM element
 * @param descriptionObject
 * @return {Object}
 */
function create(descriptionObject){
  if(typeof descriptionObject !== 'object'){
    throw new Error('descriptionObject should be an object');
  }

  if(ELEMENTS[descriptionObject.type]){
    return new ELEMENTS[descriptionObject.type](descriptionObject);
  } else {
    group('Creating custom element');
    warn(`There is no element of given type:${descriptionObject.type}`);
    groupEnd();
    return new ELEMENTS.element(descriptionObject);
  }
}

export default {create};