<p align="center">
	<img src="https://user-images.githubusercontent.com/10063864/44960189-075d1380-aec9-11e8-809f-7db844b664fd.png" width="500" alt="Rinse">
</p>

> Rinse, React, repeat. A boilerplate to build a React component library.

#### To learn how this project was made from scratch, [read the blog post](url)!

## Get Started

To start your own React component library, clone this repository and start your own Git journey!

```bash
$ git clone https://github.com/cwlsn/rinse-react cool-name
$ cd cool-name
$ rm -rf .git
$ git init
```

## Development and Storybook

You can easily develop and interact with your components by using Storybook. To run the local server, simply run:

```bash
$ npm i
$ npm run storybook
```

Navigate to [http://localhost:9001](http://localhost:9001) to view your stories. They should automatically update as you develop.

Storybook will pick up any story from the `stories.js` file in a component folder. 

Rinse is currently using the latest technology available, so you may need to update your Node versions to latest to accomodate Babel 7 and Webpack 4.
