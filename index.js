import util from 'util';

// config should be imported before importing any other file
import config from './config/config';

const debug = require('debug')('web_manga:index');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// // module.parent check is required to support mocha watch
// // src: https://github.com/mochajs/mocha/issues/1912
// if (!module.parent) {
//   // listen on port config.port
//   app.listen(config.port, () => {
//     console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
//   });
// }


require('./server/mail')
// export default app;
