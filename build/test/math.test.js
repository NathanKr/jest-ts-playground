"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("../src/math");
test('sum is ok', function () {
    expect(math_1.sum(1, 2)).toBe(3);
});
