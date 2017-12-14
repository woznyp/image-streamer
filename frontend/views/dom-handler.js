import elementsFactory from '../views/elements-factory';

class DOMHandler {
  constructor() {
    this.elements = new Map();
  }

  /**
   * Appends given element to selected target element
   * @param {DOM Object} target
   * @param {DOM Object} element
   */
  appendElement(target, element) {
    target.html.appendChild(element.html);
  }

  addElement(elementName, element){
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
        this.addElement(elementName, elementsArray.map((element) => {
          return this.createElement({type: element.tagName.toLowerCase(), reference: element})
        }));
      }
    }

    return this.elements.get(elementName);
  }
}

const domHandler = new DOMHandler();

export default domHandler;