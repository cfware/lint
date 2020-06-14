'use strict';
const path = require('path');
const fs = require('fs');

function loadPackageJSON() {
	const engines = {node: '>=10.0.0'};

	try {
		const packageJSON = {
			engines,
			...JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'))
		};

		if ('node' in packageJSON.engines === false) {
			Object.assign(packageJSON.engines, engines);
		}

		return packageJSON;
	} catch {
		return {engines};
	}
}

module.exports = loadPackageJSON();
