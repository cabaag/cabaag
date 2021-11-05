import React from 'react';
import './_terminal.scss';

const Terminal = () => (
   <div className="terminal">
      <div id="bar">
         <div className="button" id="red" />
         <div className="button" id="yellow" />
         <div className="button" id="green" />
      </div>
      <div id="screen">
         <div className="font">
            <span>root@127.0.0.1:~$ Loading...</span>
            <span className="blinking">_ </span>
         </div>
      </div>
   </div>
);

export default Terminal;
