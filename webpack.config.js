var path = require("path");

module.exports = {
  context: path.resolve(__dirname + '/src'),

	entry: {
    filename: './main.jsx'
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
      }/*,
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: __dirname + '/test',
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
      }*/
		],
	}
};