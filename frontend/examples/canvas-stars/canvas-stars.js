import domHandler from "../../views/dom-handler";
import "./canvas-stars.scss";
import {info, loop} from '../../helpers/helpers';
import Star from "./star";

if (module.hot) {
  module.hot.accept('./canvas-stars.scss', () => {
    info('Changes in canvasStars');
  })
}

const canvasStars = () => {
  const areaWidth = window.innerWidth,
  areaHeight = window.innerHeight,
  canvas = domHandler.create({type: 'canvas', elementConfig: {class:'canvas__stars', width: areaWidth, height: areaHeight}}),
  body = domHandler.getElement('body')[0],
  canvasContext = canvas.getContext();

  body.append(canvas);

  function generateStars(){
    const stars = [];
    loop(() => {
      stars.push(new Star())
    }, 10);
  }

  function clear(){
    canvasContext.clearRect(0,0, areaWidth, areaHeight);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, areaWidth, areaHeight);
  }

  let it = 0;

  function drawPoint(x, it){
    clear();
    // const x = (Math.round(Math.random() * 100) / 100) * areaWidth, y = (Math.round(Math.random() * 100) / 100) * areaHeight;
    const y = it + it*10;
    // canvasContext.fillStyle = 'white';
    canvasContext.strokeStyle = 'white';
    canvasContext.lineWidth = 1;

    // canvasContext.fillRect(x,y, 5, 5);
    canvasContext.beginPath();
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x+10, y);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x, y+10);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x+8, y+8);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x-8, y-8);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x-10, y);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x, y-10);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x+8, y-8);
    canvasContext.moveTo(x,y);
    canvasContext.lineTo(x-8, y+8);
    canvasContext.moveTo(x,y);
    canvasContext.stroke();
    canvasContext.closePath();

    it++;
    // setTimeout(() => {drawPoint(x, it)}, 1000);
    requestAnimationFrame(() => {drawPoint(x, it)});
  }

  drawPoint(200,0);

  clear();
};

export default canvasStars;