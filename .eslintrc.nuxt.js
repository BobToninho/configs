const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	// extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:vue/essential',
		'plugin:nuxt/recommended'
	],
	plugins: ['prettier'],
	// Add your custom rules here
	rules: {
		'no-console': isProduction ? 'error' : 'warn',
		'no-unused-vars': isProduction ? 'error' : 'warn',

		/* This rule enforces a line break (or no line break) after opening and before closing block tags. */
		'vue/block-tag-newline': [
			'error',
			{
				singleline: 'always',
				multiline: 'always',
				maxEmptyLines: 1
			}
		],
		/* This rule will enforce consistency of spacing after the <!-- and before the --> of comment. It also provides several exceptions for various documentation styles. */
		'vue/html-comment-content-spacing': 'error',
		// This rule disallows the <template> <script> <style> block to be empty.
		'vue/no-empty-component-block': 'error',
		// This rule disallow a potential typo in your component options
		'vue/no-potential-component-option-typo': 'error',
		// This rule is aimed at eliminating unused properties.
		'vue/no-unused-properties': 'warn'
	}
}
