import domHandler from "../../views/dom-handler";
import "./canvas-stars.scss";
import {info} from '../../helpers/helpers';

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

  function clear(){
    console.log('test');
    canvasContext.clearRect(0,0, areaWidth, areaHeight);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, areaWidth, areaHeight);
  }

  function drawPoint(){
    clear();
    const x = (Math.round(Math.random() * 100) / 100) * areaWidth, y = (Math.round(Math.random() * 100) / 100) * areaHeight;
    // canvasContext.fillStyle = 'white';
    canvasContext.strokeStyle = 'white';
    canvasContext.lineWidth = 1;

    // canvasContext.fillRect(x,y, 5, 5);
    // canvasContext.beginPath();
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
    // canvasContext.closePath();
    requestAnimationFrame(drawPoint);
  }

  clear();

  setTimeout(drawPoint, 1000);
};

export default canvasStars;