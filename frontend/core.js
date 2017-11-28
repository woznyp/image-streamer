import domHandler from './views/dom-handler';
import './static/styles/main.scss';
import './static/styles/colors.css';
import './static/styles/backgrounds.css';
import VideoFile from './static/videos/SampleVideo_1280x720_1mb.mp4';
import {error, loop} from "./helpers/helpers";

// if(module.hot){
//   module.hot.accept();
// }

const body = domHandler.getElement('body')[0];

const videoElement = {type: 'video', elementConfig: {src: VideoFile, width: 480, autoplay: false, controls: true}};

loop(2, ()=>{
  body.append(domHandler.create(videoElement));
});
body.html.classList.add('flowers');
