const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	root: true,
	env: {
		node: true
	},
	rules: {
		/* ERRORS */
		/* This rule enforces a line break (or no line break) after opening and before closing block tags. */
		'vue/block-tag-newline': [
			'error',
			{
				singleline: 'always',
				multiline: 'always',
				maxEmptyLines: 1
			}
		],
		/* This rule aims to warn the tag names other than the configured casing in Vue.js template. */
		'vue/component-name-in-template-casing': 'error',
		/* This rule will enforce consistency of spacing after the <!-- and before the --> of comment. It also provides several exceptions for various documentation styles. */
		'vue/html-comment-content-spacing': 'error',
		/* This rule reports if a component name property does not match its file name. */
		'vue/match-component-file-name': 'error',
		// This rule disallows the <template> <script> <style> block to be empty.
		'vue/no-empty-component-block': 'error',
		// This rule disallow a potential typo in your component options
		'vue/no-potential-component-option-typo': 'error',

		/* WARNS */
		'no-console': isProduction ? 'warn' : 'off',
		'no-debugger': isProduction ? 'warn' : 'off',
		// This rule disallows to pass multiple objects into array to class.
		'vue/no-multiple-objects-in-class': 'warn',
		// This rule is aimed at eliminating unused properties.
		'vue/no-unused-properties': 'warn'
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['plugin:vue/base', 'plugin:vue/recommended', 'eslint:recommended', 'plugin:vue/essential', '@vue/prettier']
}
