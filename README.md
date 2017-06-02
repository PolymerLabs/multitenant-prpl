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

-   Hardcode `basePath` for each build in each app's `polymer.json`.

        "builds": [
          { "name": "modern", "preset": "es6-unbundled", "basePath": "/prpl/modern/" },
          { "name": "fallback", "preset": "es5-bundled", "basePath": "/prpl/fallback/" }
        ]

-   Hardcode `rootPattern` to the app's logical mount point in `my-app.html`.

        rootPattern: {
          type: String,
          value: '/prpl/'
        },

-   Add a `url-space-regex` to `app-location` so it doesn't intercept clicks outside
    of its root URL. 
  
        <app-location route="{{route}}" url-space-regex="[[rootPattern]]*"></app-location>

-   Change `rootPath` to `rootPattern` in the navigation anchors.

        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="view1" href="[[rootPattern]]view1">View One</a>
          <a name="view2" href="[[rootPattern]]view2">View Two</a>
          <a name="view3" href="[[rootPattern]]view3">View Three</a>
        </iron-selector>


