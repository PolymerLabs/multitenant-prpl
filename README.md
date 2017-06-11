# multitenant-prpl

Test of using PRPL as a library, serving two PSK-based apps from non-root URLs.

To use:

1.  Clone this repo.
2.  Install dependencies:

        npm install

    This also installs all of the bower dependencies for the two PSK apps.

3.  Build:

        npm run build

4.  Serve:

        npm run serve

    Main app is available at localhost:8080. Subapps at localhost:8080/prpl/ and localhost:8080/haze/

## How did we get here?

Changes required to basic PSK setup:

-   Hardcode `rootPath` to the app's logical mount point in each app's `index.html`.

        window.Polymer = { rootPath: '/prpl' }

-   Hardcode `basePath` for each build in each app's `polymer.json`.

        "builds": [
          { "name": "modern", "preset": "es6-unbundled", "basePath": "/prpl/modern/" },
          { "name": "fallback", "preset": "es5-bundled", "basePath": "/prpl/fallback/" }
        ]

    Note: if you're running prpl-server from the build directory, simply set 
    `basePath: true`. You only need an explicit `basePath` if you're using prpl-server
    as a library and the server is _not_ running in the build directory (like here, where 
    the server runs one level up.)
