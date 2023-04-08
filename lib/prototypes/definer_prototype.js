'use strict'
const clone = require('../core/clone_core');

/**
 * @module definer_prototype
 * @require ../core/clone_core
 * @memberof module:prototypes
 * @group prototypes
 */

/**
 * DefinerPrototype.
 * @typedef {object} DefinerPrototype
 * @property {object} prototype - Seed definer prototype.
 * @property {string} name - Seed definer name.
 * @property {array} bases - Seed bases.
 * @property {object} seed - Seed prototype.
 * @property {function} setBases - Set bases for seed definer prototype.
 */

/**
 * @type {DefinerPrototype}
 */
const DefinerPrototype = {

    /**
     * prototype
     * @typedef {object} prototype
     * @inner
     */

    /**
     * @type {prototype}
     */
    prototype: {},

    name: '',

    bases: [],

    seed: {},

    /**
     * Set bases for seed prototype.
     * @function setBases
     * @param {array} bases
     */
    setBases: function(bases = []) {
        if (bases.length !== 0) {
            bases.forEach((base) => {
                if (this.bases.length === 0) {
                    this.bases = [clone(base)];
                } else {
                    this.bases.push(base);
                }
            });
        }
    }

};

module.exports = clone(DefinerPrototype);