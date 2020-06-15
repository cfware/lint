#!/usr/bin/env node
const isCI = require('is-ci');
const {ESLint} = require('eslint');

const baseConfig = require('./index.cjs');

(async () => {
	try {
		const eslint = new ESLint({
			baseConfig,
			extensions: ['.js', '.cjs', '.mjs']
		});

		const formatter = await eslint.loadFormatter(isCI ? 'stylish' : 'pretty');
		const results = await eslint.lintFiles(process.argv.slice(2));

		process.stdout.write(formatter.format(results));
		process.exit(results.some(result => result.errorCount !== 0) ? 1 : 0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
})();
