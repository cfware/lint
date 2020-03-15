#!/usr/bin/env node
const isCI = require('is-ci');
const eslint = require('eslint');
const formatterPretty = require('eslint-formatter-pretty');

const baseConfig = require('./index.cjs');

const formatter = isCI ? eslint.CLIEngine.getFormatter() : formatterPretty;

const engine = new eslint.CLIEngine({
	baseConfig,
	extensions: ['.js', '.cjs', '.mjs']
});

const report = engine.executeOnFiles(process.argv.slice(2));

process.stdout.write(formatter(report.results));
process.exit(report.errorCount === 0 ? 0 : 1);
