Objectives
==========

1. To bundle assets for a small `hello world` style react application with
   webpack in a way suitable for production (minification, cache busting,
   manifest file to easily refer to assets).

2. To have webpack serve assets during development for a small `hello world`
   style react application, (hot) reloading the application when the
   application is being edited (HMR).

    1. Use the `webpack-dev-middleware` and `webpack-hot-middleware` to let
       webpack serve the assets during development with HMR.

    2. Use the `webpack-dev-server` cli to let webpack serve the assets during
       development with HMR.

3. To use clear, explicit and self-contained webpack configuration files.

4. Use the pyramid framework to implement a minimal backend application which
   serves a bootstrap HTML page linking to the assets bundled using webpack.
   The pyramid application has to refer to the bundled asset files when in
   production mode and to the webpack-served assets in development mode.
   Besides serving the bundled assets, no other production optimization is
   needed for the backend application.



Running the application
=======================
[foreman_github]: https://github.com/ddollar/foreman

In this part, [foreman][foreman_github] is used for running the application (no special care is taken to optimize the use of it though). There is one Procfile for each situation (with middlewares, with webpack-dev-server, production).


Install dependencies
--------------------
- `cd` into the directory containing this file
- `npm install`
- activate virtualenv
- `pip install -e .`


Development mode with middlewares
---------------------------------
- `foreman start -f Procfile.development-with-middlewares`
- application should be running over at <http://localhost:6543/>


Development mode with `webpack-dev-server`
------------------------------------------
- `foreman start -f Procfile.development-with-webpack-dev-server-cli`
- application should be running over at <http://localhost:6543/>


"Production" mode
-----------------
- `npm run build`
- `foreman start -f Procfile.production`
- application should be running over at <http://localhost:6543/>
