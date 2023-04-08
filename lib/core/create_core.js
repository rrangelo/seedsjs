'use strict'
const clone = require('./clone_core');

/**
 * @module create_core
 * @group core
 */

/**
 * Create a seed object from a seed prototype.
 * @function create
 * @param {object} seed - Seed prototype.
 * @returns {object} a new seed object
 */
const create = (
    seed = {}
) => {

    return clone(seed);

};

module.exports = create;