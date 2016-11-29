# nx-puzzle — My simple word puzzle game in AngularJS 1

This small and simple game is sample of my skills and style of coding in ES6 AgularJS1 (based on ng6-starter).
Keywords : AngularJS 1, ES6, Webpack, Sass, Bootstrap, Karma/Jasmine, Gulp, ng-table


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
npm start
```

Now browse to the app at `http://localhost:3000/`.


## Building

You can simply build this project with:

```
npm run build
```

That creates dist folder in the app structure with builded files neccessary for running on the web server (upload on web hosting or run loccaly with http-server -a localhost -p 8000 if it's installed)


## Testing

There are unit tests in this project.

### Running Unit Tests

Unit tests are written in
[Jasmine](https://jasmine.github.io/), which you run with the [Karma Test Runner](https://karma-runner.github.io/1.0/index.html).

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `....spec.js`.
* the coverage of unit tests is found at `/reports/coverage/...` (just open the index.html file in browser)
* you can find tests summary (coverage, results...) in console after running npm test
* if problems with karma occurs, try run `npm install -g karma-cli` to install karma locally and then start tests in app folder

To run the unit tests with karma:

```
npm test
```


## Directory Layout

```
nx-puzzle/              --> app root folder
    client/                   --> all of the source files for the application
        app/                   --> all components of the application
            common/            --> common components (directives, services)
                assets/                --> all design files (css, images, fonts)
            components/            --> all components for specific parts of the application
                home/                  --> default component - playing the game
                    home.html            --> the partial template
                    home.controller.js              --> the controller logic
                    home.controller.spec.js         --> tests of the controller
                    home.scss         --> css style for this component
                    home.js         --> config for this component
                    home.component.js         --> home component definition
                scores/                --> component for displaying high scores
            app.js          --> all modules of the app are defined in this file
        index.html             --> app layout file (the main html template file of the app)
    dist/               --> built project
    reports/            --> source of unit tests coverage
```