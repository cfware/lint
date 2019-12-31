#!/usr/bin/env node
const eslint = require('eslint');
const formatterPretty = require('eslint-formatter-pretty');

const baseConfig = require('./index.cjs');

const engine = new eslint.CLIEngine({
	baseConfig,
	extensions: ['.js', '.cjs', '.mjs']
});

const report = engine.executeOnFiles(process.argv.slice(2));

process.stdout.write(formatterPretty(report.results));
process.exit(report.errorCount === 0 ? 0 : 1);
