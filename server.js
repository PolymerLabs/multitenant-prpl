/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http:polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http:polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http:polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http:polymer.github.io/PATENTS.txt
 */
prpl = require('prpl-server');
express = require('express');

const app = express()
const purple = express()
const haze = express()

app.get('/', (req, res, next) => res.sendFile('index.html', {root: __dirname+'/'}));


purple.get('/*', prpl.makeHandler('prpl/build/', {
  builds: [
    {name: 'modern', browserCapabilities: ['es2015', 'push']},
    {name: 'fallback'},
  ],
}));

haze.get('/*', prpl.makeHandler('haze/build/', {
  builds: [
    {name: 'modern', browserCapabilities: ['es2015', 'push']},
    {name: 'fallback'},
  ],
}));

app.use('/prpl', purple)
app.use('/haze', haze)

app.listen(8080);

