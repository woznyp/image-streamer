import config from '../config/config';

function useConsole(type, arg){
    console[type](arg);
  }
  
  function log(arg){
    if(config.environment === 'local'){
      useConsole('log', arg);
    }
  }
  
  function info(arg){
    if(config.environment === 'local'){
      useConsole('info', arg);
    }
  }
  
  function warn(arg){
    if(config.environment === 'local'){
      useConsole('warn', arg);
    }
  }
  
  function error(arg){
    if(config.environment === 'local'){
      useConsole('error', arg);
    }
  }
  
  function group(arg){
    if(config.environment === 'local'){
      useConsole('group', arg);
    }
  }
  
  function groupEnd(arg){
    if(config.environment === 'local'){
      useConsole('groupEnd', arg);
    }
  }

  export {log, info, warn, error, group, groupEnd}