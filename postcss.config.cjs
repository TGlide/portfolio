const config = {
	plugins: [
		require('autoprefixer'),
		require('postcss-nested'),
		require('postcss-custom-media')({
			importFrom: 'src/styles/theme.css'
		})
	]
};

module.exports = config;
