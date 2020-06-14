'use strict';

const packageJSON = require('./package-json.cjs');
const semver = require('semver');

const packageMinimumVersion = semver.minVersion(packageJSON.engines.node);

function conditionalRule(minimumVersion, ruleName, options) {
	return {
		[ruleName]: semver.lte(minimumVersion, packageMinimumVersion) ? options : 0
	};
}

module.exports = conditionalRule;
