var Nightmare = require('nightmare')
var nightmare = Nightmare({show: true, paths: {userData: './public/index.html'}})

nightmare
  .goto('http://localhost:5000/')
  .wait('#cart2')
  .click('#cart2')
  .click('#cart2')
  .click('#cart2')
  .wait(1000)
  .click('#cart4')
  .click('#cart4')
  .click('#cart4')
  .wait(1000)

  .evaluate(function () {
    return document.querySelector('#fin').innerHTML
  })
  .end()
  .then(function (result) {
    if (result === '540 ฿') {
      console.log('test 1 :: value is true')
    } else {
      console.log('test 1 :: value is false')
    }
  })
