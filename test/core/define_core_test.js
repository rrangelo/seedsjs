'use strict';
const define = require('./../../lib/core/define_core');
const EmptyNameError = require('../../lib/errors/empty_name_error');
const assert = require('assert');

describe('Define Tests', function () {

    describe('1 - define Success', function () {

        beforeEach(function () {

        });
    
        afterEach(function () {
            
        });
    
        describe('1.1 - define base success', function () {

            it('should be ok', function () {

                const BaseSeed = define(
                    'BaseSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        sym: Symbol('Seed'),
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
                
                assert.ok(BaseSeed.prototype);
                assert.ok(BaseSeed.prototype.getName() === 'BaseSeed');
                assert.ok(BaseSeed.prototype.getBases().length == 0);

            });

        });
        
        describe('1.2 - define based success', function () {

            it('should be ok', function () {

                const BaseSeed = define(
                    'BaseSeed',
                    {
                        obj: {},
                        str: '',
                        bool: true,
                        numb: 0,
                        undef: undefined,
                        sym: Symbol('Seed'),
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
                
                const BasedSeed = define(
                    'BasedSeed',
                    {
                        str: '',
                        bool: true,
                        numb: 0,
                        fun1: function() {
                            console.log(this);
                        },
                        fun2: function(param) {
                            console.log(param);
                        },
                        fun3: function() {
                            return this;
                        }
                    },
                    [BaseSeed]
                );

                assert.ok(BasedSeed.prototype);
                assert.ok(BasedSeed.prototype.getName() === 'BasedSeed');
                assert.ok(BasedSeed.prototype.getBases().length == 1);

            });

        });
        
        describe('1.3 - define empty success', function () {

            it('should be ok', function () {

                const BaseSeed = define(
                    'BaseSeed'
                );
                
                assert.ok(BaseSeed.prototype);
                assert.ok(BaseSeed.prototype.getName() === 'BaseSeed');
                assert.ok(BaseSeed.prototype.getBases().length == 0);

            });

        });
    
    });

    describe('2 - define Error', function () {

        describe('2.1 - define EmptyNameError', function () {

            it('should throws EmptyNameError', function () {

                assert.throws(
                    () => {
                        define('', {})
                    },
                    EmptyNameError
                );
                assert.throws(
                    () => {
                        define('', {})
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            });

            it('should throws EmptyNameError', function () {

                assert.throws(
                    () => {
                        define(undefined, {})
                    },
                    EmptyNameError
                );
                assert.throws(
                    () => {
                        define(undefined, {})
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            });

            it('should throws EmptyNameError', function () {

                assert.throws(
                    () => {
                        define(' ', {})
                    },
                    EmptyNameError
                );
                assert.throws(
                    () => {
                        define(' ', {})
                    },
                    (error) => {
                        return error instanceof Error
                    }
                );

            });

        });
        
    });
    
  });
  