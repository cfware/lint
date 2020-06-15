'use strict';

const packageJSON = require('./package-json.cjs');
const semver = require('semver');

const packageMinimumVersion = semver.minVersion(packageJSON.engines.node);

function conditionalValue(minimumVersion, ifMet, ifUnmet) {
	return semver.lte(minimumVersion, packageMinimumVersion) ? ifMet : ifUnmet;
}

function conditionalRule(minimumVersion, ruleName, options) {
	return {
		[ruleName]: conditionalValue(minimumVersion, options, 0)
	};
}

module.exports = {
	conditionalValue,
	conditionalRule
};
