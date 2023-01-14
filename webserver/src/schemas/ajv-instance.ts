// const Ajv = require('ajv');

import Ajv from 'ajv';

import addFormats from 'ajv-formats';

const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

// module.exports = ajvInstance;
export default ajvInstance;
