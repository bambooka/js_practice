'use strict';

//code with loop for..in 
//will be showed only key instead value

var browsers = ['Chrome', 'Opera', 'Safari', 'Edge'];

for (var browser in browsers) {
    console.log(browser);
}

// code with loop for..of
//will be showed value

var browsersOf = ['Chrome', 'Opera', 'Safari', 'Edge'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsersOf[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _browser = _step.value;

        console.log(_browser);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}