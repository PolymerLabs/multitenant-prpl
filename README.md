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
