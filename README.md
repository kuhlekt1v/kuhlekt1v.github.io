# Devfolio Extended

My public resume and portfolio, based on Mark MacNeil's Devfolio (A simple, responsive, single-page portfolio and resume for developers built with Bulma, Sass, Font Awesome and Flickity).

View the [original demo here](https://mmacneil.github.io/devfolio/).

### Desktop version

<img src="https://github.com/mmacneil/devfolio/blob/master/docs/devfolio-desktop.gif" />

### Responsive version

<img src="https://github.com/mmacneil/devfolio/blob/master/docs/devfolio-responsive.gif" height="485" />

## Setup

1. Clone, fork or create a template from this repository.
2. Install required dependencies from your terminal by running `npm install` from the project folder root containing `package.json`.
<pre>
<code>src\>npm install</code></pre>
3. Build the project locally by running `npm run dev` from the `src` root folder containing `webpack.config.js`.
<pre>
<code>src\>npm run dev</code></pre>
4. Use webpack to compile and bundle the css/js by running `npm run build` from the project folder root containing `webpack.config.js`. Webpack will also begin watching these files for changes and re-build as they're modified.
<pre>
<code>src\>npm run build</code></pre>
5. Open `index.html` locally in your favorite browser.
6. Modify accordingly - styles, colors and variables can be changed in `styles.scss`. Refer to the Bulma docs for guidance on how to quickly customize further to suit your tastes using [color helpers](https://bulma.io/documentation/modifiers/color-helpers/) and [variables](https://bulma.io/documentation/customize/variables/). See the [Flickity](https://github.com/metafizzy/flickity) docs if you wish to modify the carousel.
7. Deploy the project to github pages by running `npm run deploy` from the `src` directory (after running `npm run build`).
<pre><code>src\>npm run deploy</code></pre>

## Contact

cody.sheridan@protonmail.com
