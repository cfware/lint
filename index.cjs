'use strict';

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

	'import/newline-after-import': 2,
	'import/no-amd': 2,
	'import/no-duplicates': 2,

	'import/unambiguous': 2,
	'import/no-commonjs': 2,

	'import/no-extraneous-dependencies': 2,
	'import/no-mutable-exports': 2,
	'import/no-named-as-default-member': 2,
	'import/no-named-as-default': 2,

	'import/no-unresolved': 2,

	'import/order': 2,
	'import/no-unassigned-import': 2
};

const nodeErrors = {
	'node/no-unpublished-bin': 2,
	'node/no-unsupported-features/es-syntax': [2, {ignores: ['modules']}],
	'node/no-unsupported-features/es-builtins': 2,
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
	'unicorn/import-index': [2, {ignoreImports: true}]
};

const eslintCommentErrors = {
	'eslint-comments/disable-enable-pair': [2, {allowWholeFile: true}],
	'eslint-comments/no-aggregating-enable': 2,
	'eslint-comments/no-duplicate-disable': 2,
	'eslint-comments/no-unused-disable': 2,
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
	'no-import-assign': 2,
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
	'array-bracket-newline': [2, 'consistent'],
	'array-bracket-spacing': [2, 'never'],
	'array-element-newline': [2, 'consistent'],
	'block-spacing': 2,
	'brace-style': [2, '1tbs', {allowSingleLine: false}],
	camelcase: [2, {properties: 'always'}],
	'comma-dangle': [2, 'never'],
	'comma-spacing': [2, {before: false, after: true}],
	'comma-style': [2, 'last'],
	'computed-property-spacing': [2, 'never', {enforceForClassMembers: true}],
	'consistent-this': [2, 'no copies of this'],
	'eol-last': 2,
	'func-call-spacing': [2, 'never'],
	'func-name-matching': [2, {considerPropertyDescriptor: true}],
	'func-names': [2, 'never'],
	'function-call-argument-newline': [2, 'consistent'],
	indent: [2, 'tab', {SwitchCase: 1, ignoreComments: true}],
	'key-spacing': [2, {beforeColon: false, afterColon: true}],
	'keyword-spacing': 2,
	'linebreak-style': [process.platform === 'win32' ? 0 : 2, 'unix'],
	'lines-between-class-members': [2, 'always', {
		// Workaround to allow class fields to not have lines between them.
		exceptAfterSingleLine: true
	}],
	'max-depth': 1,
	'max-nested-callbacks': [1, 4],
	'max-params': [1, {max: 6}],
	'max-statements-per-line': 2,
	'new-cap': [2, {newIsCap: true, capIsNew: true}],
	'new-parens': 2,
	'newline-per-chained-call': 2,
	'no-array-constructor': 2,
	'no-inline-comments': 2,
	'no-lonely-if': 2,
	'no-mixed-operators': 2,
	'no-multi-assign': 2,
	'no-multiple-empty-lines': [2, {max: 1}],
	'no-negated-condition': 2,
	'no-new-object': 2,
	'no-restricted-syntax': [2, 'WithStatement'],
	'no-trailing-spaces': 2,
	'no-unneeded-ternary': 2,
	'no-whitespace-before-property': 2,
	'object-curly-spacing': [2, 'never'],
	// Disabled because of https://github.com/xojs/eslint-config-xo/issues/27
	// 'object-property-newline': 2,
	'one-var': [2, 'never'],
	'one-var-declaration-per-line': 2,
	'operator-assignment': [2, 'always'],
	'operator-linebreak': [2, 'after'],
	'padded-blocks': [2, 'never', {allowSingleLineBlocks: false}],
	'padding-line-between-statements': [2, {
		blankLine: 'always',
		prev: 'multiline-block-like',
		next: '*'
	}],
	'prefer-object-spread': 2,
	'quote-props': [2, 'as-needed'],
	quotes: [2, 'single'],
	semi: [2, 'always'],
	'semi-spacing': [2, {before: false, after: true}],
	'semi-style': [2, 'last'],
	'space-before-blocks': [2, 'always'],
	'space-before-function-paren': [2, {
		anonymous: 'always',
		named: 'never',
		asyncArrow: 'always'
	}],
	'space-in-parens': [2, 'never'],
	'space-infix-ops': 2,
	'space-unary-ops': 2,
	'spaced-comment': [2, 'always', {
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
	'switch-colon-spacing': [2, {after: true, before: false}],
	'template-tag-spacing': [2, 'never'],
	'unicode-bom': [2, 'never']
};

const eslintES6 = {
	'arrow-parens': [2, 'as-needed'],
	'arrow-spacing': [2, {before: true, after: true}],
	'generator-star-spacing': [2, 'both'],
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
		es6: true
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
