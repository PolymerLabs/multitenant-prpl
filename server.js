prpl = require('prpl-server');
express = require('express');

const app = express()
const purple = express()
const haze = express()

app.get('/api/launch', (req, res, next) => res.send('boom'));

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

