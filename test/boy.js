/* global describe,it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect // jshint ignore:line
describe('test Ban9Jin', function () {
  it('select 1 book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#cart1')
      .evaluate(function () {
        return document.querySelector('#fin').innerHTML
      })
    expect(link).to.equal('100 ฿')
  })
  it('select 2 book difference', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#cart2')
      .click('#cart3')
      .evaluate(function () {
        return document.querySelector('#fin').innerHTML
      })
    expect(link).to.equal('180 ฿')
  })
  it('select 4 book and equre 1 book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#cart1')
      .click('#cart2')
      .click('#cart3')
      .click('#cart1')
      .evaluate(function () {
        return document.querySelector('#fin').innerHTML
      })
    expect(link).to.equal('340 ฿')
  })
  it('select 7 book difference', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#cart1')
      .click('#cart2')
      .click('#cart3')
      .click('#cart4')
      .click('#cart5')
      .click('#cart6')
      .click('#cart7')
      .evaluate(function () {
        return document.querySelector('#fin').innerHTML
      })
    expect(link).to.equal('280 ฿')
  })
  it('select 5 book equre', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#cart1')
      .click('#cart1')
      .click('#cart1')
      .click('#cart1')
      .click('#cart1')
      .evaluate(function () {
        return document.querySelector('#fin').innerHTML
      })
    expect(link).to.equal('500 ฿')
  })
})
