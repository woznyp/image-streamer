import {server} from '../config/config';

class WebSocketConnection {
  constructor(IP) {
    if (!WebSocketConnection.instance) {
      const wss = new WebSocket(`wss://${IP}:9999`);
      wss.onopen = (msg) => {
        console.info('Connection to websocket server opened')
      };
      wss.onmessage = (msg) => {
        console.info('Websocket message', msg);
      };

      WebSocketConnection.instance = wss;
    }

    this.instance = WebSocketConnection.instance;
  }

  send(data) {
    if(this.instance.readyState === 1){
      this.instance.send(data);
    } else {
      console.warn('Connection to websocket server is in progress');
    }
  }
}

const webSocketConnection = new WebSocketConnection(server.IP);

module.exports = WebSocketConnection;