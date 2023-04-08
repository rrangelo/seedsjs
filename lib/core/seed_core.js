'use strict'
const base = require('./base_core');
const clone = require('./clone_core');

/**
 * @module seed_core
 */

/**
 * Create a seed object from a seed prototype.
 * @memberof module:seed_core
 * @requires module:base_core
 * @requires module:clone_core
 * @function seed
 * @param {string} name
 * @param {object} seedPrototype
 * @param {array} bases
 * @returns {object} a seed object.
 */
const seed = ( 
    name = "",
    seedPrototype = {},
    bases = []
) => {

    /**
     * 
     */
    seedPrototype.prototype = {
        bases: [],
        name: name
    }

    seedPrototype = base(seedPrototype, bases);

    return clone(seedPrototype);

};

module.exports = seed;