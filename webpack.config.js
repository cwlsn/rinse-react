// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');

// Webpack is just a bunch of keys on module.exports!
module.exports = {
	// This is where our app starts. This is why we have done all this importing
	// and exporting, to get to here
	entry: './src/index.js',
	// module (I know it's a bit weird to have module.exports.module) is where we
	// define all the rules for how webpack will deal with thing.
	module: {
		// rules takes an array, each item containing the respective rules
		rules: [
			{
				// First up, our JavaScript rules.
				// If you want to use the .jsx extension, you can change this line to
				// test: /\.jsx?$/,
				// The ? in the regex just means "optional"
				test: /\.js$/,
				// Don't bother spending time transpiling your installed packages
				// exclude: /node_modules/,
				// This is where we tell webpack to use babel to transpile our JS.
				// The configuration can go here, but in this case it's in ./babelrc.js
				use: {
					loader: 'babel-loader',
				},
			},
			{
				// I haven't used SCSS in the base example, but it's here for you if you
				// want! If you want to use CSS, you can change this next like's regex to
				// /\.(css|scss)$/ or even just /\.css$/
				test: /\.scss$/,
				use: [
					// These three libraries are commonly used together to turn Sass into
					// CSS, then be able to load the CSS directly with imports. From there
					// It gets put in the DOM for you.
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				// Some image formats so you can import images
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
	// Here we define explicitly the file types we intend to deal with
	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},
	// This is where we define how everything gets output.
	// dist is a common output folder, and it should be gitignored. The build can
	// be run after publishing so you don't wind up with it in source control
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		// You can do fun things here like use the [hash] keyword to generate unique
		// filenames, but for this purpose rinse.js is fine. This file and path will
		// be what you put in package.json's "main" field
		filename: 'rinse.js',
		// This field determines how things are importable when installed from other
		// sources. UMD may not be correct now and there is an open issue to fix this,
		// but until then, more reading can be found here:
		// https://webpack.js.org/configuration/output/#output-librarytarget
		libraryTarget: 'umd',
	},
};
