import React from 'react';
import './_terminal.scss';

const Terminal = () => (
	<div className="terminal">
		<div id="bar">
			<div id="red" className="button" />
			<div id="yellow" className="button" />
			<div id="green" className="button" />
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
