'use strict'
const define = require('./core/define_core')
const clone = require('./core/clone_core')
const enchain = require('./core/enchain_core')
const unchain = require('./core/unchain_core')

/**
 * @module seed
 */

/**
 * Seed
 * @typedef {object} Seed
 * @property {function} define - define a seed from a JS object.
 * @property {function} clone - clone a seed object.
 * @property {function} enchain - convert a seed object in a chain.
 * @property {function} unchain - convert a chain in a seed object.
 */

/**
 * @type {Seed}
 */
const Seed = {

    /**
     * Define a seed from a JS object.
     * @function define
     * @param {string} name - Seed name.
     * @param {object} prototype - JS prototype.
     * @param {array} bases - Seed bases.
     * @returns {object} a seed.
     */
    define: (
        name = '',
        prototype = {},
        bases = []
    ) => {
        return define(name, prototype, bases)
    },

    /**
     * Clone a seed object.
     * @function clone
     * @param {object} obj - Seed object
     * @returns {object} a new seed object.
     */
    clone: (obj) => {
        return clone(obj)
    },

    /**
     * Convert a seed object in a chain.
     * @function enchain
     * @param {object} obj - Seed object.
     * @returns {string} a chain.
     */
    enchain: (obj = {}) => {
        return enchain(obj)
    },

    /**
     * Convert a chain in a specific seed object
     * @function unchain
     * @param {string} chain - Chain to convert.
     * @param {object} seed - Seed object.
     * @returns {object} a new seed object from a chain.
     */
    unchain: (chain = '{}', seed = {}) => {
        return unchain(chain, seed)
    }

}

module.exports = Seed;
