'use strict';
/**
 * Core module for enchain function
 * @module enchain_core
 */

/**
 * Convert a seed object in a chain.
 * @function enchain
 * @memberof module:enchain_core
 * @param {object} obj - Seed object.
 * @returns {string} a chain.
 */
const enchain = (
    obj = {}
) => {

    return JSON.stringify(obj);

};

module.exports = enchain;