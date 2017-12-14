class Element {
  constructor(descriptionObject) {
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
      if(attribute === 'class'){
        this.html.classList.add(this.elementConfig[attribute]);
      } else {
        this.html[attribute] = this.elementConfig[attribute];
      }
    }
  }

  append(child){
    this.html.appendChild(child.html);
  }
}

export default Element;