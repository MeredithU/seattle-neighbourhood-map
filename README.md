# Seattle Neighbourhood Map

## Included

1. [React](http://facebook.github.io/react/)
2. [Webpack](https://webpack.github.io/docs/)
3. [Babel](https://babeljs.io/)
4. [Mapbox](https://www.mapbox.com/mapbox.js/api/v2.3.0/)

### Testing:

1. [Mocha](https://mochajs.org/)
2. [jsdom](https://github.com/tmpvar/jsdom)
3. [mocha-jsdom](https://github.com/rstacruz/mocha-jsdom)

## Connecting Mapbox Credentials

You will need to create an _environment-variables.js_ file in the `/src` folder and include your *Access Token* and *Map ID* from your Mapbox account to display the map. Once you've created that file, it's pulled into the *App.jsx* file found in the `/src` folder.

You can structure your file the following way:

```javascript
var EnvironmentVariables = {
  MAPBOX_MAP_ID: '{INSERT HERE}',
  MAPBOX_ACCESS_TOKEN: '{INSERT HERE}'
}
module.exports = EnvironmentVariables;
```

## Installation Instructions

1. ``git clone https://github.com/MeredithU/seattle-neighbourhood-map.git``
2. ``cd seattle-neighbourhood-map``
3. ``npm install``

## To Run Dev Server

1. ``npm build``
2. ``npm start``
3. Go to *http://localhost:8000/* in your browser

## To Run Mocha Tests

1. ``npm install mocha -g``
2. ``npm test``