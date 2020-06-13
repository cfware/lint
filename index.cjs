'use strict';

const path = require('path');
const fs = require('fs');

const isCI = require('is-ci');

const ciError = isCI || process.env.STRICT_LINT ? 'error' : 'warn';

function getUnresolvedOptions() {
	try {
		const packageJSON = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));
		if ('exports' in packageJSON === false || 'name' in packageJSON === false) {
			return {};
		}

		return {
			ignore: [packageJSON.name]
		};
	} catch {
	}

	return {};
}

const importErrors = {
	'import/default': 2,
	'import/export': 2,
	'import/extensions': [2, 'ignorePackages'],

	'import/first': 2,
	'import/named': 2,
	'import/namespace': 2,
	'import/no-absolute-path': 2,
	'import/no-webpack-loader-syntax': 2,
	'import/no-self-import': 2,
	'import/no-cycle': 2,
	'import/no-useless-path-segments': 2,

	'import/newline-after-import': ciError,
	'import/no-amd': 2,
	'import/no-duplicates': 2,

	'import/unambiguous': 2,
	'import/no-commonjs': 2,

	'import/no-extraneous-dependencies': ciError,
	'import/no-mutable-exports': 2,
	'import/no-named-as-default-member': 2,
	'import/no-named-as-default': 2,

	'import/no-unresolved': [2, getUnresolvedOptions()],

	// Too many bugs
	'import/order': 0,
	'import/no-unassigned-import': 2
};

const nodeErrors = {
	'node/no-unpublished-bin': 2,
	'node/no-unsupported-features/es-syntax': [2, {ignores: [
		'modules',
		'dynamicImport'
	]}],
	'node/no-unsupported-features/es-builtins': 2,
	'node/no-unsupported-features/node-builtins': 2,
	'node/process-exit-as-throw': 2,
	'node/no-deprecated-api': 2,
	'node/prefer-global/buffer': [2, 'always'],
	'node/prefer-global/console': [2, 'always'],
	'node/prefer-global/process': [2, 'always'],
	'node/prefer-global/text-decoder': [2, 'always'],
	'node/prefer-global/text-encoder': [2, 'always'],
	'node/prefer-global/url-search-params': [2, 'always'],
	'node/prefer-global/url': [2, 'always'],
	'node/prefer-promises/dns': 2,
	'node/prefer-promises/fs': 2
};

const unicornErrors = {
	'unicorn/prevent-abbreviations': [2, {
		checkProperties: false,
		checkFilenames: false,
		replacements: {
			args: false
		}
	}],

	// TODO: Remove this override when the rule is more stable.
	'unicorn/consistent-function-scoping': 0,

	'unicorn/expiring-todo-comments': 2,
	'unicorn/import-index': [2, {ignoreImports: true}],
	// This rule is a bit much
	'unicorn/no-null': 0,
	// Block on https://github.com/sindresorhus/eslint-plugin-unicorn/issues/717
	'unicorn/no-fn-reference-in-iterator': 0
};

const eslintCommentErrors = {
	'eslint-comments/disable-enable-pair': [2, {allowWholeFile: true}],
	'eslint-comments/no-aggregating-enable': 2,
	'eslint-comments/no-duplicate-disable': 2,
	'eslint-comments/no-unused-disable': 1,
	'eslint-comments/no-unused-enable': 2
};

const promiseErrors = {
	'promise/param-names': 2,
	'promise/no-return-wrap': [2, {allowReject: true}],
	'promise/no-new-statics': 2,
	'promise/no-return-in-finally': 2,
	'promise/valid-params': 2,
	'promise/prefer-await-to-then': 2
};

const eslintPossibleErrors = {
	// Override eslint:recommended
	'no-empty': [2, {allowEmptyCatch: true}],
	'require-atomic-updates': 0,

	// Add to eslint:recommended
	'no-await-in-loop': 2,
	// Disabled because of https://github.com/eslint/eslint/issues/6028
	// 'no-extra-parens': [2, 'all', {
	// 		conditionalAssign: false,
	// 		nestedBinaryExpressions: false,
	// 		ignoreJSX: 'multi-line'
	// 	}
	// ],
	'no-dupe-else-if': 2,
	'no-import-assign': 2,
	'no-setter-return': 2,
	'no-template-curly-in-string': 2
};

const eslintBestPractices = {
	'accessor-pairs': [2, {enforceForClassMembers: true}],
	'array-callback-return': 2,
	'block-scoped-var': 2,
	complexity: 1,
	curly: 2,
	'default-case': 2,
	'default-param-last': 2,
	'dot-location': [2, 'property'],
	'dot-notation': 2,
	eqeqeq: 2,
	'grouped-accessor-pairs': 2,
	'guard-for-in': 2,
	'no-alert': 2,
	'no-caller': 2,
	'no-constructor-return': 2,
	'no-else-return': [2, {allowElseIf: false}],
	'no-eval': 2,
	'no-extend-native': 2,
	'no-extra-bind': 2,
	'no-extra-label': 2,
	'no-floating-decimal': 2,
	'no-implicit-coercion': 2,
	'no-implicit-globals': 2,
	'no-implied-eval': 2,
	'no-iterator': 2,
	'no-labels': 2,
	'no-lone-blocks': 2,
	'no-multi-spaces': 2,
	'no-multi-str': 2,
	'no-new': 2,
	'no-new-func': 2,
	'no-new-wrappers': 2,
	'no-octal-escape': 2,
	'no-proto': 2,
	'no-return-assign': [2, 'always'],
	'no-return-await': 2,
	'no-script-url': 2,
	'no-self-compare': 2,
	'no-sequences': 2,
	'no-throw-literal': 2,
	'no-unmodified-loop-condition': 2,
	'no-unused-expressions': 2,
	'no-useless-call': 2,
	'no-useless-concat': 2,
	'no-useless-return': 2,
	'no-void': 2,
	'no-warning-comments': 1,
	'prefer-named-capture-group': 2,
	'prefer-promise-reject-errors': [2, {allowEmptyReject: true}],
	'prefer-regex-literals': 2,
	radix: 2,
	'require-unicode-regexp': 2,
	'wrap-iife': [2, 'inside', {functionPrototypeMethods: true}],
	yoda: 2
};

const eslintVariables = {
	// Override eslint:recommended
	'no-undef': [2, {typeof: true}],
	'no-unused-vars': [2, {
		vars: 'all',
		args: 'after-used',
		ignoreRestSiblings: true,
		argsIgnorePattern: '^_$',
		caughtErrors: 'all',
		caughtErrorsIgnorePattern: '^_$'
	}],

	// Add to eslint:recommended
	'no-label-var': 2,
	'no-restricted-globals': [2, 'event'],
	'no-undef-init': 2
};

const eslintNodeErrors = {
	'handle-callback-err': 1,
	'no-buffer-constructor': 2,
	'no-mixed-requires': [2, {grouping: true, allowCall: true}],
	'no-new-require': 2,
	'no-path-concat': 2,
	'no-restricted-modules': [2, 'domain', 'freelist', 'smalloc', 'sys', 'colors']
};

const eslintStyleErrors = {
	'array-bracket-newline': [ciError, 'consistent'],
	'array-bracket-spacing': [ciError, 'never'],
	'array-element-newline': [ciError, 'consistent'],
	'block-spacing': ciError,
	'brace-style': [ciError, '1tbs', {allowSingleLine: false}],
	camelcase: [ciError, {properties: 'always'}],
	'comma-dangle': [ciError, 'never'],
	'comma-spacing': [ciError, {before: false, after: true}],
	'comma-style': [ciError, 'last'],
	'computed-property-spacing': [ciError, 'never', {enforceForClassMembers: true}],
	'consistent-this': [ciError, 'no copies of this'],
	'eol-last': ciError,
	'func-call-spacing': [ciError, 'never'],
	'func-name-matching': [ciError, {considerPropertyDescriptor: true}],
	'func-names': [ciError, 'never'],
	'function-call-argument-newline': [ciError, 'consistent'],
	indent: [ciError, 'tab', {SwitchCase: 1, ignoreComments: true}],
	'key-spacing': [ciError, {beforeColon: false, afterColon: true}],
	'keyword-spacing': ciError,
	'linebreak-style': [process.platform === 'win32' ? 0 : ciError, 'unix'],
	'lines-between-class-members': [ciError, 'always', {
		// Workaround to allow class fields to not have lines between them.
		exceptAfterSingleLine: true
	}],
	'max-depth': 1,
	'max-nested-callbacks': [1, 4],
	'max-params': [1, {max: 6}],
	'max-statements-per-line': ciError,
	'new-cap': [ciError, {newIsCap: true, capIsNew: true}],
	'new-parens': ciError,
	'newline-per-chained-call': ciError,
	'no-array-constructor': ciError,
	'no-inline-comments': ciError,
	'no-lonely-if': ciError,
	'no-mixed-operators': ciError,
	'no-multi-assign': ciError,
	'no-multiple-empty-lines': [ciError, {max: 1}],
	'no-negated-condition': ciError,
	'no-new-object': ciError,
	'no-restricted-syntax': [2, 'WithStatement'],
	'no-trailing-spaces': ciError,
	'no-unneeded-ternary': ciError,
	'no-whitespace-before-property': ciError,
	'object-curly-spacing': [ciError, 'never'],
	// Disabled because of https://github.com/xojs/eslint-config-xo/issues/27
	// 'object-property-newline': ciError,
	'one-var': [ciError, 'never'],
	'one-var-declaration-per-line': ciError,
	'operator-assignment': [ciError, 'always'],
	'operator-linebreak': [ciError, 'after'],
	'padded-blocks': [ciError, 'never', {allowSingleLineBlocks: false}],
	'padding-line-between-statements': [ciError, {
		blankLine: 'always',
		prev: 'multiline-block-like',
		next: '*'
	}],
	'prefer-exponentiation-operator': ciError,
	'prefer-object-spread': ciError,
	'quote-props': [ciError, 'as-needed'],
	quotes: [ciError, 'single'],
	semi: [ciError, 'always'],
	'semi-spacing': [ciError, {before: false, after: true}],
	'semi-style': [ciError, 'last'],
	'space-before-blocks': [ciError, 'always'],
	'space-before-function-paren': [ciError, {
		anonymous: 'always',
		named: 'never',
		asyncArrow: 'always'
	}],
	'space-in-parens': [ciError, 'never'],
	'space-infix-ops': ciError,
	'space-unary-ops': ciError,
	'spaced-comment': [ciError, 'always', {
		line: {
			exceptions: ['-', '+', '*'],
			markers: ['!', '/', '=>']
		},
		block: {
			exceptions: ['-', '+', '*'],
			markers: ['!', '*'],
			balanced: true
		}
	}],
	'switch-colon-spacing': [ciError, {after: true, before: false}],
	'template-tag-spacing': [ciError, 'never'],
	'unicode-bom': [ciError, 'never']
};

const eslintES6 = {
	'arrow-parens': [ciError, 'as-needed'],
	'arrow-spacing': [ciError, {before: true, after: true}],
	'generator-star-spacing': [ciError, 'both'],
	'no-restricted-imports': [2, 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
	'no-useless-computed-key': 2,
	'no-useless-constructor': 2,
	'no-useless-rename': 2,
	'no-var': 2,
	'object-shorthand': [2, 'always'],
	'prefer-arrow-callback': [2, {allowNamedFunctions: true}],
	'prefer-const': [2, {destructuring: 'all'}],
	'prefer-destructuring': [
		2,
		{
			// `array` is disabled because it forces destructuring on
			// stupid stuff like `foo.bar = process.argv[2];`
			VariableDeclarator: {
				array: false,
				object: true
			},
			AssignmentExpression: {
				array: false,

				// Disabled because object assignment destructuring requires parens wrapping:
				// `let foo; ({foo} = object);`
				object: false
			}
		},
		{
			enforceForRenamedProperties: false
		}
	],
	'prefer-numeric-literals': 2,
	'prefer-rest-params': 2,
	'prefer-spread': 2,
	'prefer-template': 2,
	'rest-spread-spacing': [2, 'never'],
	'symbol-description': 2,
	'template-curly-spacing': 2,
	'yield-star-spacing': [2, 'both']
};

module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	ignorePatterns: [
		'coverage/',
		'dist/',
		'node_modules/',
		'tap-snapshots/'
	],
	env: {
		node: true,
		es2020: true
	},
	globals: {
		globalThis: true
	},
	reportUnusedDisableDirectives: true,
	plugins: [
		'no-use-extend-native',
		'unicorn',
		'promise',
		'import',
		'node',
		'eslint-comments'
	],
	extends: [
		'eslint:recommended',
		'plugin:unicorn/recommended'
	],
	overrides: [
		{
			files: ['**/*.cjs'],
			parserOptions: {
				sourceType: 'script'
			},
			rules: {
				'import/no-commonjs': 0
			}
		}
	],
	rules: {
		...importErrors,
		...unicornErrors,
		...nodeErrors,
		...eslintCommentErrors,
		...promiseErrors,
		...eslintPossibleErrors,
		...eslintBestPractices,
		...eslintVariables,
		...eslintNodeErrors,
		...eslintStyleErrors,
		...eslintES6,

		'no-use-extend-native/no-use-extend-native': 2
	}
};
