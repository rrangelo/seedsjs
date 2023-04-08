'use strict';
const Seeds = require('./../lib/seeds');
const assert = require('assert');
const EmptyNameError = require('./../lib/errors/empty_name_error');
const EmptySeedError = require('./../lib/errors/empty_seed_error');
const EmptyChainError = require('./../lib/errors/empty_chain_error');


describe('Seed Tests', function () {

    describe('1 - Seed Success', function () {

        describe('1.1 - Seed define success', function () {

            it('should be ok', function () {

                const SampleSeed = Seeds.define(
                    'SampleSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        prototype: {},
                        fun1: function() {
                            console.log(this);
                        },
                        fun2: function(param) {
                            console.log(param);
                        },
                        fun3: function() {
                            return this;
                        }
                    }
                );

                assert.ok(SampleSeed);
                assert.ok(SampleSeed.prototype);

            });

            it('should be ok', function () {

                const SampleSeed = Seeds.define(
                    'SampleSeed'
                );

                assert.ok(SampleSeed);
                assert.ok(SampleSeed.prototype);

            });

        });
        
        describe('1.2 - Seed clone success', function () {

            it('should be ok', function () {

                const SampleSeed = Seeds.define(
                    'SampleSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        prototype: {},
                        fun1: function() {
                            console.log(this);
                        },
                        fun2: function(param) {
                            console.log(param);
                        },
                        fun3: function() {
                            return this;
                        }
                    }
                );

                let baseObj = SampleSeed.create();

                baseObj.str = 'main';

                let cloneObj = Seeds.clone(baseObj);

                assert.ok(cloneObj);
                assert.ok(baseObj.str === cloneObj.str);

            });

        });
    
        describe('1.3 - Seed enchain success', function () {

            it('should be ok', function () {

                const SampleSeed = Seeds.define(
                    'SampleSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        prototype: {},
                        fun1: function() {
                            console.log(this);
                        },
                        fun2: function(param) {
                            console.log(param);
                        },
                        fun3: function() {
                            return this;
                        }
                    }
                );

                let baseObj = SampleSeed.create();

                let chain = Seeds.enchain(baseObj);

                assert.ok(chain);
                assert.ok(typeof chain === 'string');

            });

            it('should be ok', function () {

                let chain = Seeds.enchain();

                assert.ok(chain);

            });

        });
    
        describe('1.4 - Seed unchain success', function () {

            it('should be ok', function () {

                const SampleSeed = Seeds.define(
                    'SampleSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        prototype: {},
                        fun1: function() {
                            console.log(this);
                        },
                        fun2: function(param) {
                            console.log(param);
                        },
                        fun3: function() {
                            return this;
                        }
                    }
                );

                let baseObj = SampleSeed.create();

                let chain = Seeds.enchain(baseObj);

                let unchainObj = Seeds.unchain(chain, SampleSeed);

                assert.ok(unchainObj);

            });

            it('should be ok', function () {

                const SampleSeed = Seeds.define(
                    'SampleSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        prototype: {},
                        fun1: function() {
                            console.log(this);
                        },
                        fun2: function(param) {
                            console.log(param);
                        },
                        fun3: function() {
                            return this;
                        }
                    }
                );

                let obj = Seeds.unchain(undefined, SampleSeed);

                assert.ok(obj);

            });

        });
    
    });
    
    describe('2 - Seed Error', function () {

        describe('2.1 - Seed unchain error', function () {

            it('should thows EmptySeedError', function () {

                assert.throws(
                    () => {
                        Seeds.unchain('chain')
                    },
                    EmptySeedError
                );
                assert.throws(
                    () => {
                        Seeds.unchain('chain')
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            })

            it('should thows EmptyChainError', function () {

                assert.throws(
                    () => {
                        Seeds.unchain('', {})
                    },
                    EmptyChainError
                );
                assert.throws(
                    () => {
                        Seeds.unchain('', {})
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            })

        });

        describe('2.2 - Seed define error', function () {

            it('should thows EmptyNameError', function () {

                assert.throws(
                    () => {
                        Seeds.define('', {})
                    },
                    EmptyNameError
                );
                assert.throws(
                    () => {
                        Seeds.define('', {})
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            })

            it('should thows EmptyNameError', function () {

                assert.throws(
                    () => {
                        Seeds.define(undefined, {})
                    },
                    EmptyNameError
                );
                assert.throws(
                    () => {
                        Seeds.define(undefined, {})
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            })

        });

    });

});
  