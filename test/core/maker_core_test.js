'use strict';
const define = require('../../lib/core/define_core');
const maker = require('./../../lib/core/maker_core');
const assert = require('assert');

describe('Maker Core Tests', function () {

    describe('1 - maker core Success', function () {

        beforeEach(function () {

        });
    
        afterEach(function () {
            
        });
    
        describe('1.1 - maker core base success', function () {

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

                let dad = BaseSeed.maker().make();
                
                assert.ok(BaseSeed.maker().prototype);
                assert.ok(dad);

            });

        });
        
        describe('1.2 - maker core base success', function () {

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

                let dad = BaseSeed.maker().make();
                let son = BasedSeed.maker().make();
                
                assert.ok(BaseSeed.maker().prototype);
                assert.ok(BasedSeed.maker().prototype);
                assert.ok(dad);
                assert.ok(son);

            });

        });
        
        describe('1.3 - maker core base success', function () {

            it('should be ok', function () {

                const BaseSeedMaker = maker(
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

                assert.ok(BaseSeedMaker);
                assert.ok(BaseSeedMaker.prototype);
                assert.ok(BaseSeedMaker.prototype.getName());
                assert.ok(BaseSeedMaker.make());
                assert.ok(BaseSeedMaker.str('str').make());

            });

        });
        
        describe('1.4 - maker core base success', function () {

            it('should be ok', function () {

                const BaseSeedMaker = maker(
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

                assert.ok(BaseSeedMaker);
                assert.ok(BaseSeedMaker.prototype);
                assert.ok(BaseSeedMaker.prototype.getName());
                assert.ok(BaseSeedMaker.make());

            });

        });
        
        describe('1.5 - maker core success', function () {

            it('should be ok', function () {

                const BaseSeedMaker = maker();

                assert.ok(BaseSeedMaker.prototype);
                assert.ok(BaseSeedMaker.prototype.getName());
                assert.ok(BaseSeedMaker.make());

            });

        });
        
    });
  
});
  