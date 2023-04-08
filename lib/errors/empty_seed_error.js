'use strict'
/**
 * @module empty_seed_error
 */

/**
 * EmptySeedError
 * @typedef {object} EmptySeedError
 * @property {string} name - Error name.
 * @property {string} message - Error message.
 */

/**
 * Error when a seed object is empty.
 * @function EmptySeedError
 * @returns {EmptySeedError} an error.
 * @memberof module:empty_seed_error
 */
function EmptySeedError() {
    const error = Object.create(Error.prototype);
    Object.setPrototypeOf(error, EmptySeedError.prototype);
    error.name = 'EmptySeedError';
    error.message = 'The "seed" parameter can not be empty or undefined';
    return error;
}

EmptySeedError.prototype = Object.create(Error.prototype);

module.exports = EmptySeedError();