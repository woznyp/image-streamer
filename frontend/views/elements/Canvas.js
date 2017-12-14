import Element from './Element';

class CanvasElement extends Element{
  constructor(descriptionObject){
    super(descriptionObject);
    this.html.height = descriptionObject.elementConfig.height;
    this.html.width = descriptionObject.elementConfig.width;
  }

  getContext(){
    return this.html.getContext('2d');
  }
}

export default CanvasElement;