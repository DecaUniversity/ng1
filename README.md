### NG1: An Angular exploration

This single page application is an exercise to experiment with the different modules and features that AngularJS 1.6 has to offer.

It portrays the code examples found in the [AngularJS 1.6 documents](https://code.angularjs.org/snapshot/docs/guide/introduction) while following the [teachings](https://ultimateangular.com/) and [style](https://github.com/toddmotto/angular-styleguide) of the OG NG Guru [Todd Motto](https://twitter.com/toddmotto).

This application also allows me to demonstrate to you my understanding of Front End Architecture: modern styling through SCSS, automatic continuous build through Gulp, MVP engineering and component-based design through Angular, responsive design through Bootstrap, modularity.

#### Highlights:

* Adobe Character Animator will be used to create a talking kidney for one of the examples in the `$scope` pane. The kidney will be created using Adobe Illustrator. 

#### Set up:

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

#### ng-beware

* When adding or removing dependencies with bower, it is critical that you use the --save tag along with install or uninstall. Otherwise, the `inject:lib` task won't get triggered and index.html won’t be updated. You would not want to just remove the files from the `lib` folder but leave their declaration as dependencies in `bower.json`; otherwise, the next time that you run `bower install` those undesired packages will be installed – adding unnecessary bulk to the project. 

* It is critical to always start the project using `yarn start` instead of `gulp`; otherwise, you won't be able to inject dependencies already added to the `lib` folder. After the project is running, feel free to use any `gulp` task independently.


#### Building for GitHub Pages:

At any stage of your development, you can build/re-build the docs folder that will be used by Github Pages as the source of content for your Page by running this command in another terminal window:

`gulp build:docs`

The docs folder will be create (or deleted and re-created) and populated with the transformed .scss and .js files along with the other project files needed to have a working page equal to the one you have been playing around with during development. 

To enable this Github feature:

* Go to your repo Settings.
* Scroll down to the Github Pages section.
* On Source select "master branch /docs folder". Note: If there is no docs folder in the repo, descendant of the root, this option will be disabled. 
* Click Save.
* Click on the link shown in the green banner and enjoy your live page!

Thank you for stopping by!
