# nx-puzzle — My simple word puzzle game in AngularJS 1

This small and simple game is sample of my skills and style of coding in ES6 AgularJS1.
Used technologies : AngularJS 1, ES6, NodeJS, Webpack, Karma/Jasmine, Gulp, ng-table, Bootstrap


## Getting Started

To get started you can simply clone the nx-puzzle repository and install the dependencies:


### Prerequisites

You need git to clone the nx-puzzle repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

I also use node.js to initialize and test nx-puzzle. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Clone nx-puzzle

Clone the nx-puzzle repository using git:

```
git clone https://github.com/nusix/nx-puzzle.git
cd nx-puzzle
```


### Install Dependencies

`Npm` is automatically preconfigured to install all dependencies so you can simply do:

```
npm install
```


### Run the Application

The project is preconfigured with a simple development web server. The simplest way to start
this server is:

```
npm run gulp serve
```

Now browse to the app at `http://localhost:3000/#/home`.


## Testing

There are unit tests in this project.

### Running Unit Tests

Unit tests are written in
[Jasmine](https://jasmine.github.io/), which you run with the [Karma Test Runner](https://karma-runner.github.io/1.0/index.html).

* the configuration is found at `config/karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `....spec.js`.
* the coverage of unit tests is found at `/reports/coverage/...` (just open the index.html file in browser)
* if problems with karma occurs, try run `npm install -g karma-cli` to install karma locally and then start tests in app folder

To run the unit tests with karma:

```
npm run gulp test
```

To run the unit tests with karma everytime the code source changes:

```
npm run gulp test:watch
```


## Directory Layout

```
nx-puzzle/              --> app root folder
    config/                --> source of config files (karma, webpack)
    reports/               --> source of unit tests coverage
    src/                   --> all of the source files for the application
        app/                   --> all components of the application
            components/            --> all components for specific parts of the application
                home/                  --> default component - playing the game
                    home.controller.html            --> the partial template
                    home.controller.js              --> the controller logic
                    home.controller.spec.js         --> tests of the controller
                    home.controller.scss         --> css style for this component
                    home.module.js         --> all modules of this component are defined in this file
                    home.route.js         --> all routes of this component are defined in this file
                scores/                --> component for displaying high scores
            shared/                --> common components (directives, services)
            app.module.js          --> all modules of the app are defined in this file
        assets/                --> all design files (css, images, fonts)
        index.html             --> app layout file (the main html template file of the app)
```