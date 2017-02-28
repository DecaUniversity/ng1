### NG1: An Angular exploration

This single page application is an exercise to experiment with the different modules and features that AngularJS 1.6 has to offer.

It portrays the code examples found in the [AngularJS 1.6 documents](https://code.angularjs.org/snapshot/docs/guide/introduction) while following the [teachings](https://ultimateangular.com/) and [style](https://github.com/toddmotto/angular-styleguide) of the OG NG Guru [Todd Motto](https://twitter.com/toddmotto).

This application also allows me to demonstrate to you my understanding of Front End Architecture: modern styling through SCSS, automatic continuous build through Gulp, MVP engineering and component-based design through Angular, responsive design through Bootstrap, modularity.

After cloning the project, please run the following:

If you have `yarn` installed:

Note: This requires `yarn v0.16` or higher.

`yarn start`

If you prefer to use `npm`, please modify the `package.json` file `script` property:

From:

`"start": "yarn && bower install && gulp"`

to:

`"start": "npm install && bower install && gulp"`

and then run:

`npm start`

`start` is a script that will install the node and bower packages as well as start the Gulp automatic build workflow. Gulp will be running continuously in the background until you decide to stop it (CTRL + C in the Mac). A browser tab/window will open to display the application. Every time that you make a change to a non-library, non-node-module .css, .html or .js file, the browser will reload and display the changes automatically.

For any new .js file that you create, please ensure that you follow the following naming convention:

``` javascript
/**
  Each file type is denoted by its ending name.
  A dot (.) should be placed before the name expect for the app.js file
  For example: sample.controller.js
  The files will be injected in index.html in this order from top to bottom.
  This ensures that each file has its proper dependencies injected before its
  own injection.
**/

  'app/app.js',
  'app/**/*module.js',
  'app/**/*constants.js',
  'app/**/*provider.js',
  'app/**/*enum.js',
  'app/**/*model.js',
  'app/**/*config.js',
  'app/**/*filter.js',
  'app/**/*directive.js',
  'app/**/*decorator.js',
  'app/**/*interceptor.js',
  'app/**/*service.js',
  'app/**/*workflow.js',
  'app/**/*repository.js',
  'app/**/*resolver.js',
  'app/**/*controller.js',
  'app/**/**.js'

  // Non-Angular scripts are injected last.
```

Thank you for stopping by!
