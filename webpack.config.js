var path = require("path");

module.exports = {
  context: path.resolve(__dirname + '/src'),

	entry: {
    filename: './main.js'
  },

	output: {
		filename: 'app.js',
    path: __dirname + '/app',
    publicPath: '/app/'
	},

	devServer: {
		inline: true,
		port: 8000
	},

	module: {
		loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
      }
		],
	}
};