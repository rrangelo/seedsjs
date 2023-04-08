'use strict'
/**
 * @module empty_name_error
 */

/**
 * EmptyNameError
 * @typedef {object} EmptyNameError
 * @property {string} name - Error name.
 * @property {string} message - Error message.
 */

/**
 * Error when a name is empty.
 * @function EmptyNameError
 * @memberof module:empty_name_error
 * @returns {EmptyNameError} an error.
 */
function EmptyNameError() {
    const error = Object.create(Error.prototype);
    Object.setPrototypeOf(error, EmptyNameError.prototype);
    error.name = 'EmptyNameError';
    error.message = 'The "name" parameter can not be empty';
    return error;
}

EmptyNameError.prototype = Object.create(Error.prototype);

module.exports = EmptyNameError();