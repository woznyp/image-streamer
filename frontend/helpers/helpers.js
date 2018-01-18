import config from '../config/config';

function loop(numberOfIterations, callback) {
  for (let i = 0; i < numberOfIterations; i++) {
    callback(i);
  }
}

function revloop(numberOfIterations, callback) {
  for (let i = numberOfIterations - 1; i >= 0; i--) {
    callback(i);
  }
}

export {loop, revloop}