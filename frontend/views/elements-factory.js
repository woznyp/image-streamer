import {warn, group, groupEnd} from '../helpers/helpers';
import element from './elements/Element';
import video from './elements/Video';
import canvas from './elements/Canvas';

const ELEMENTS = {element,video,canvas};

/**
 * Creates new object with given DOM element
 * @param descriptionObject
 * @return {Object}
 */
function create(descriptionObject){
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