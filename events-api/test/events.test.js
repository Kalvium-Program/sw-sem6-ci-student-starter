const test = require('node:test');
const assert = require('node:assert');
const { events, seatsLeft } = require('../events');

test('every event has a title and a positive seat count', () => {
  for (const event of events) {
    assert.ok(event.title.length > 0);
    assert.ok(event.seats > 0);
  }
});

test('seats left never goes below zero', () => {
  assert.strictEqual(seatsLeft(2, 30), 0);
  assert.strictEqual(seatsLeft(1, 10), 30);
});
