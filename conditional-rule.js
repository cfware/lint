import packageJSON from './package-json.js';
import semver from 'semver';

const packageMinimumVersion = semver.minVersion(packageJSON.engines.node);

export function conditionalValue(minimumVersion, ifMet, ifUnmet) {
    return semver.lte(minimumVersion, packageMinimumVersion) ? ifMet : ifUnmet;
}

export function conditionalRule(minimumVersion, ruleName, options) {
    return {
        [ruleName]: conditionalValue(minimumVersion, options, 0)
    };
}
