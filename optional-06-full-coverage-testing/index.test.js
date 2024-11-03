import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Functino sum harus mengembalikan 0 untuk inputan yang tidak valid', () => {
  assert.strictEqual(sum(NaN, 5), 0);
  assert.strictEqual(sum('string', 5), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum(5, 'string'), 0);
  assert.strictEqual(sum(5, null), 0);
  assert.strictEqual(sum(null, 5), 0);
});

test('Function sum harus mengembalikan 0 untuk inputan yang negatif', () => {
  assert.strictEqual(sum(-1, -1), 0);
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
});

test('Function sum harus mengembalikan hasil penjumlahan untuk inputan positif', () => {
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(5, 4), 9);
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(0, 0), 0);
});
