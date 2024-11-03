import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from "./index.js";

test('function sum menjumlahkan dua parameter dengan benar', () => {
    assert.strictEqual(sum(5, 4), 9);
    assert.strictEqual(sum(0, -4), -4);
});