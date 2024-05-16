'use strict';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');
import "@fontsource/montserrat"

exports.onServiceWorkerUpdateFound = () => window.location.reload(true);
