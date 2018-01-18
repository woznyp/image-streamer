import {body} from '../helpers/dom__helpers';
import domHandler from '../views/dom-handler';

class Component{
    constructor(){
        this.content = domHandler.create({type: 'div'});
        this.content.html.innerText = new Date();
        body.append(this.content);
    }
}

export default () => new Component();