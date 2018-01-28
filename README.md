# MovieCheck
is a web-application with movie browser feature

### Overview
This is a simple, REACT based app

### Getting Started
Clone this repository```git -clone https://github.com/anielkapa/MovieCheck.git```

### Install
1. To run this app, you need installed NodeJS and npm. At the root of your project, run```npm install ``` to install all dependencies.
2. Please check package.json devDependencies and install all packages in required version:
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "babel-preset-stage-2": "^6.24.1",
  "gulp": "^3.9.1",
  "gulp-plumber": "^1.2.0",
  "gulp-sass": "^3.1.0",
  "gulp-sourcemaps": "^2.6.3",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "webpack": "^3.10.0",
  "webpack-dev-server": "^2.10.1"
},
"dependencies": {
  "whatwg-fetch": "^2.0.3"
}
```

### Running the App
1. In console run webpack-dev-server: ```./node_modules/.bin/webpack-dev-server --inline --hot```
2. Visit http://localhost:8080/ in your browser. Webpack is running.

### Built With
* [React.js](https://reactjs.org/) -  A JavaScript library for building user interfaces.
* [Sass](http://sass-lang.com/) - is the most mature, stable, and powerful professional grade CSS extension language in the world.
* HTML5
* Webpack
* Gulp

### Author
* [Anna Sobkowiak](https://github.com/anielkapa)

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Acknowledgments
* The [Movie Database] (TMDb) is a community built movie and TV database.  (https://www.themoviedb.org/?language=pl)

### Next steps
* save the search results in indexed DB, add service workers
