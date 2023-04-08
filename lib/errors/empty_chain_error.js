'use strict'
/**
 * @module empty_chain_error
 */

/**
 * EmptyChainError
 * @typedef {object} EmptyChainError
 * @property {string} name - Error name.
 * @property {string} message - Error message.
 */

/**
 * Error when a chain is empty.
 * @function EmptyChainError
 * @returns {EmptyChainError} an error.
 */
function EmptyChainError() {
    const error = Object.create(Error.prototype);
    Object.setPrototypeOf(error, EmptyChainError.prototype);
    error.name = 'EmptyChainError';
    error.message = 'The "chain" parameter can not be empty or undefined';
    return error;
}

EmptyChainError.prototype = Object.create(Error.prototype);

module.exports = EmptyChainError();