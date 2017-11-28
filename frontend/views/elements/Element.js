import {info} from '../../helpers/helpers';

class Element {
  constructor(descriptionObject) {
    info(`creating a ${descriptionObject.type} element`);
    this.id = `element-${new Date().getTime()}`;
    this.elementConfig = descriptionObject.elementConfig;
    this.html = descriptionObject.reference || document.createElement(descriptionObject.type);

    if (this.elementConfig) {
      this.elementConfig.id = this.id;
    }

    if (!descriptionObject.reference) {
      this.setElementAttributes();
    }
  }

  setElementAttributes() {
    for (let attribute in this.elementConfig) {
      this.html[attribute] = this.elementConfig[attribute];
    }
  }

  append(child){
    this.html.appendChild(child.html);
  }
}

export default Element;