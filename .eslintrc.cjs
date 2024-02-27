module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['node', 'prettier', '@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-use-before-define': 'off',
		'svelte/infinite-reactive-loop': 'error',
		'svelte/no-dupe-on-directives': 'error',
		'svelte/no-dupe-use-directives': 'error',
		'svelte/no-store-async': 'error',
		'svelte/require-store-callbacks-use-set-param': 'error',
		'svelte/require-store-reactive-access': 'error',
		'svelte/no-target-blank': 'error',
		'svelte/no-reactive-functions': 'error',
		'svelte/block-lang': ['error', { script: 'ts' }],
		'svelte/button-has-type': 'error',
		'svelte/no-immutable-reactive-statements': 'error',
		'svelte/no-reactive-literals': 'error',
		'svelte/no-useless-mustaches': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',

		eqeqeq: ['error', 'smart'],
		'node/no-unpublished-import': 0,
		'node/no-missing-import': 'off',
		'prettier/prettier': 'error',
		'block-scoped-var': 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'eol-last': 'error',
		'prefer-arrow-callback': 'error',
		'no-trailing-spaces': 'error',
		quotes: ['warn', 'single', { avoidEscape: true }],
		'no-restricted-properties': [
			'error',
			{
				object: 'describe',
				property: 'only'
			},
			{
				object: 'it',
				property: 'only'
			}
		]
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'svelte/no-unused-svelte-ignore': 'off'
			}
		},
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'warn',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-use-before-define': ['error'],
				'@typescript-eslint/no-warning-comments': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/ban-types': 'off',
				'@typescript-eslint/camelcase': 'off',
				'node/no-missing-import': 'off',
				'node/no-empty-function': 'off',
				'node/no-unsupported-features/es-syntax': 'off',
				'node/no-missing-require': 'off',
				'node/shebang': 'off',
				'no-dupe-class-members': 'off',
				'require-atomic-updates': 'off'
			},
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module'
			}
		},
		{
			files: ['tests/*/.ts'],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off'
			}
		}
	]
};
