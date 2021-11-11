const { assert } = require('chai').assert;
const Browser = require('zombie');

let browser;

suite('Cross page tests', function() {
  setup(function() {
    browser = new Browser();
  });

  test('require rate for groups from page Hood river', function() {
    let referrer = 'http://localhost:3000/tours/hood-river';
    browser.visit(referrer, function() {
      browser.clickLink('.requestGroupRate', function() {
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });

  test('require rate for groups from page Oregon', function() {
    let referrer = 'http://localhost:3000/tours/oregon-coast';
    browser.visit(referrer, function() {
      browser.clickLink('.requestGroupRate', function() {
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });

  test('require rate for groups from page', function(done) {
    browser.visit('http://localhost:3000/tours/request-group-rate', function() {
      assert(browser.field('referrer').value === '');
      done();
    });
  });
});