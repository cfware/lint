import path from 'node:path';
import fs from 'node:fs';

function loadPackageJSON() {
    const engines = {node: '>=18.0.0'};

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

export default loadPackageJSON();
