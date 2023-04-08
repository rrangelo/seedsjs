'use strict'
const clone = require('./clone_core');

/**
 * @module maker_core
 * @group core
 */

/**
 * Define a seed maker.
 * @function maker
 * @param {String} name - Seed maker name.
 * @param {Object} seed - Seed prototype.
 * @returns {Object} a maker object.
 * */
const maker = (
    name = "",
    seed = {},
) => {

    /**
     * SeedMaker
     * @typedef {object} SeedMaker
     * @property {prototype} prototype - Seed maker prototype.
     * @property {function} make - Get a seed object.
     */

    /**
     * @type {SeedMaker}
     */
    const SeedMaker = {

        /**
         * prototype
         * @typedef {object} prototype
         * @property {object} base - Seed base.
         * @property {string} getName - Get a seed maker name.
         * @inner
         */

        /**
         * @type {prototype}
         */
        prototype: {
            getName: function() { 
                return name + 'Maker';
            },
            base: clone(seed)
        },

        /**
         * Get a seed object.
         * @function make
         * @returns {object} a seed object.
         * */
        make: function() {
            return this.prototype.base;
        }

    };

    Object.keys(seed)
    .forEach((key) => {
        
        if (!SeedMaker[key]) {
            
            switch(typeof seed[key]) {

                case 'symbol':
                case 'undefined':
                case 'function': {
                    break;
                }

                case 'object': 
                default: {
                    
                    SeedMaker[key] = function(value) {
                            
                        this.prototype.base[key] = value;

                        return this;

                    };

                }

            }

        }

    });

    return SeedMaker;

};

module.exports = maker;