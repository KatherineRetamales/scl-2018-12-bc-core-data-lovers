global.window = window;
global.assert = require('chai').assert;
global.expect = require('chai').expect;
require('../src/data/lol/lol.js');
require('../src/data.js');
require('./data.spec.js');

describe('dataName', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataName, 'function');
  });
  it('Deberia retornar el primer nombre Aatrox', () => {
    let name = window.dataName(window.data);
    assert.equal(name[0], 'Aatrox');
  });
});

describe('filterData', () => {
  it('Deberia ser una función', () => {
    assert.equal(typeof window.filterData, 'function');
  });
  it('Deberia retornar el primer personaje de tipo Mago(Ahri)', () => {
    let filterMage = window.filterData(window.data, 'Mage');
    assert.equal(filterMage[0].name, 'Ahri');
  });

  it('Debería retornar el segundo personaje de tipo tanque(Alistar)', () => {
    let filterTank = window.filterData(window.data, 'Tank');
    assert.equal(filterTank[1].name, 'Alistar');
  });
});

describe('dataSearch', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataSearch, 'function');
  });

  it('Debería retornar el nombre de Gnar', () => {
    let filterName = window.dataSearch(window.name, 'Gnar');
    assert.equal(filterName[0].name, 'Gnar');
  });
});

describe('dataTitle', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataTitle, 'function');
  });
  it('Deberia retornar el titulo (the Fist of Shadow)', () => {
    let filterTitle = window.dataTitle(window.data);
    assert.equal(filterTitle[2], 'the Fist of Shadow');
  });
});
describe('dataSplash', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.dataSplash, 'function');
  });
  it('debería arrojar un string', () => {
    let filterSplash = window.dataSplash(window.data);
    assert.equal(typeof filterSplash[1], 'string');
  });
});

describe('dataBlurb', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataBlurb, 'function');
  });
  it('debería arrojar un string', () => {
    let filterBlurb = window.dataBlurb(window.data);
    assert.equal(typeof filterBlurb[1], 'string');
  });
});
describe('dataInfo', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataInfo, 'function');
  });
  it('debería arrojar un objeto', () => {
    let filterInfo = window.dataInfo(window.data);
    assert.equal(typeof filterInfo[1], 'object');
  });
});
describe('dataInfoAttack', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataInfoAttack, 'function');
  });
  it('debería arrojar un número', () => {
    let filterInfoAttack = window.dataInfoAttack(window.dataInfo(window.data));
    assert.equal(typeof filterInfoAttack[0], 'number');
  });
});
describe('dataInfoDefense', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataInfoDefense, 'function');
  });
  it('debería arrojar un número', () => {
    let filterInfoDefense = window.dataInfoDefense(window.dataInfo(window.data));
    assert.equal(typeof filterInfoDefense[0], 'number');
  });
});
describe('dataInfoMagic', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataInfoMagic, 'function');
  });
  it('debería arrojar un número', () => {
    let filterInfoMagic = window.dataInfoMagic(window.dataInfo(window.data));
    assert.equal(typeof filterInfoMagic[0], 'number');
  });
});
describe('dataInfoDifficulty', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataInfoDifficulty, 'function');
  });
  it('debería arrojar un número', () => {
    let filterInfoDifficulty = window.dataInfoDifficulty(window.dataInfo(window.data));
    assert.equal(typeof filterInfoDifficulty[0], 'number');
  });
});
describe('dataStats', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataStats, 'function');
  });
  it('debería arrojar un objeto', () => {
    let filterDataStats = window.dataStats(window.data);
    assert.equal(typeof filterDataStats[1], 'object');
  });
});
  