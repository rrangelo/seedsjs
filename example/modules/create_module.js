'use strict'
const BaseSeed = require('../seeds/base_seed');
const BasedSeed = require('../seeds/based_seed');

const Create = () => {

    console.log('');
    console.log('Create');
    console.log('');
    console.log('BaseSeed:');
    let base = {};
    
    console.log('');
    console.log('Create BaseSeed:');
    base = BaseSeed.create();console.log(BaseSeed.prototype.getBases()[0].prototype);
    console.log('BaseSeed:', base);
    console.log('BaseSeed Name:    ', base.name);
    console.log('BaseSeed Age:     ', base.age);
    
    console.log('New BaseSeed Name:');
    base.name = 'New BaseSeed Name';
    console.log('BaseSeed:         ', base.name);
    console.log('BaseSeed Age:     ', base.age);
    
    console.log('New BaseSeed Age:');
    base.age = 30;
    console.log('BaseSeed Name:    ', base.name);
    console.log('BaseSeed Age:     ', base.age);
    
    console.log('');
    console.log('');
    console.log('BasedSeed:');
    
    let based = {};
    
    console.log('');
    console.log('Create BasedSeed:');
    based = BasedSeed.create();console.log(BasedSeed.prototype.getBases()[0].prototype);
    console.log('BasedSeed:', based);
    console.log('BasedSeed Name:      ', based.name);
    console.log('BasedSeed Gender:    ', based.gender);
    console.log('BasedSeed Age:       ', based.age);
    
    console.log('New BasedSeed Name:');
    based.name = 'New BasedSeed Name';
    console.log('BasedSeed Name:      ', based.name);
    console.log('BasedSeed Gender:    ', based.gender);
    console.log('BasedSeed Age:       ', based.age);
    
    console.log('New BasedSeed Gender:');
    based.gender = false;
    console.log('BasedSeed Name:      ' + based.name);
    console.log('BasedSeed Gender:    ' + based.gender);
    console.log('BasedSeed Age:       ' + based.age);
    
    console.log('New BasedSeed Age:');
    based.age = 30;
    console.log('BasedSeed Name:      ', based.name);
    console.log('BasedSeed Gender:    ', based.gender);
    console.log('BasedSeed Age:       ', based.age);
    
};

module.exports = Create;