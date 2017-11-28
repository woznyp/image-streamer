import elementsFactory from '../views/elements-factory';
import {warn, info} from '../helpers/helpers';

class DOMHandler {
  constructor() {
    info('creating an object');
    this.elements = new Map();
  }

  /**
   * Appends given element to selected target element
   * @param {DOM Object} target
   * @param {DOM Object} element
   */
  appendElement(target, element) {
    target.appendChild(element);
  }

  addElement(elementName, element){
    warn(element);
    this.elements.set(elementName, element);
  }

  create(descriptionObject){
    const queryName = descriptionObject.type,
    element = this.createElement(descriptionObject);

    this.addElement(queryName, element);
    return element;
  }

  /**
   * Creates element of given type
   * @param {String} type
   * @param {Object} elementConfig
   * @returns {DOM Object}
   */
  createElement(descriptionObject) {
    const element = elementsFactory.create(descriptionObject);
    return element;
  }

  updateElement(elementReference) {

  }

  removeElement(elementReference) {

  }

  /**
   * Returns array with search query results
   * @param {String} elementName
   * @returns {Array}
   */
  getElement(elementName) {
    if (!this.elements.has(elementName)) {
      let elementsArray = Array.from(document.querySelectorAll(elementName));

      if(elementsArray){
        info('adding elementsArray to Map');
        this.addElement(elementName, elementsArray.map((element) => {
          return this.createElement({type: element.tagName.toLowerCase(), reference: element})
        }));
      }
    }

    info(this.elements);

    return this.elements.get(elementName);
  }
}

const domHandler = new DOMHandler();

export default domHandler;