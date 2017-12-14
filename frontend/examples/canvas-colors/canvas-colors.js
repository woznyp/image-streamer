import domHandler from "../../views/dom-handler";
import canvasColors from "./canvas-colors.scss";

const canvasColor = () => {
  const body = domHandler.getElement('body')[0],
  span = domHandler.createElement({type: 'span'}),
  canvas = domHandler.createElement({type: 'canvas', height: 50, width: 600}),
  ctx = canvas.getContext(),
  grd = ctx.createLinearGradient(0,0,640,0);

  grd.addColorStop(0, "red");
  grd.addColorStop(0.15, "orange");
  grd.addColorStop(0.3, "yellow");
  grd.addColorStop(0.45, "green");
  grd.addColorStop(0.6, "blue");
  grd.addColorStop(0.75, "indigo");
  grd.addColorStop(0.9, "violet");

  ctx.fillStyle = grd;
  ctx.fillRect(0,0, 640, 480);

  canvas.html.addEventListener('mousemove', (ev) => {
    const color = ctx.getImageData(ev.x, ev.y, 1, 1).data,
    red = color[0].toString(16).length > 1 ? color[0].toString(16) : `0${color[0].toString(16)}`,
    green = color[1].toString(16).length > 1 ? color[1].toString(16) : `0${color[1].toString(16)}`,
    blue = color[2].toString(16).length > 1 ? color[2].toString(16) : `0${color[2].toString(16)}`,
    colorData = `#${red}${green}${blue}`;

    console.log(color);

    span.html.innerText = colorData;
    span.html.style.background = colorData;
  });

  domHandler.appendElement(body, canvas);
  domHandler.appendElement(body, span);

  span.html.classList.add('label');
};

export default canvasColor;