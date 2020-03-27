## Overview

Onepage is a website created to hold a collection of 1 page "mini sites", that all have their own look and feel. The idea is to contain your idea within one page, without any links to other pages in this directory.

To add your own page, feel free to make a Pull Request, making sure you follow the contributing format

## Getting started

The fastest way to get started is by cloning this repository, creating your own branch, and installing all dependencies:

1. Run: `git clone git@github.com:addisonschultz/onepage.git`
1. Run: `git checkout -b "name/pageName"` (i.e. `git checkout -b "addison/page1`)
1. Run: `cd onepage && yarn`

Then you should be setup, and ready to start contributing! Make sure you follow the contributing format below.

## Contributing Format

This site is made off of the [Gatsby](https://www.gatsbyjs.org/) default starter. If you haven't worked with Gatsby before, the following should give you a better understanding of how the project is structured.

### `src`

The `src` directory is where all of the main code lives.

### `src/pages`

The `pages` directory in `src` is where each page of the website lives. To create a new page, add a `.js` file with the name of the url slug you want this page to appear under (i.e. `page1.js`).

Keep all styles in the file, or inline with your components. See [`src/components/pages/link`](src/components/pages/link) for an example.

Make sure you keep all of your styles inline to the page, and don't use any css that would select pages outside of the desired context.

### `src/components`

The `components` directory in `src` is where any or all components you need for a page should live. To organize the components better, add new components to a folder under your name. (i.e. [`src/components/addison`](src/components/addison/))

Keep your styles inline and scoped to the original component.

### `src/images`

The `images` directory in `src` is where you can place your images, SVGs, or other visual assets. To organize the assets better, add new ones to a folder under your name. (i.e. [`src/images/addison`](src/images/addison/))

## Contributing

When you're done with your page, make a [Pull Request](https://github.com/addisonschultz/onepage/pulls)! I'll add a link on the front page so you can easily explore all the pages.
