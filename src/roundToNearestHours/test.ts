/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import {
  roundToNearestHours,
  // type RoundToNearestHoursOptions,
} from "./index.js";

describe("roundToNearestHours", () => {
  it("rounds given date to the nearest hour by default", () => {
    // low
    assert.deepStrictEqual(roundToNearestHours(makeDate(15, 10)), makeDate(15));

    // mid-point
    assert.deepStrictEqual(roundToNearestHours(makeDate(15, 30)), makeDate(16));

    // high
    assert.deepStrictEqual(roundToNearestHours(makeDate(15, 59)), makeDate(16));
  });
});

function makeDate(
  hours: number,
  minutes: number = 0,
  seconds: number = 0,
  milliseconds: number = 0,
) {
  // helper to make tests more readable since we mostly care about hours and minutes
  return new Date(2014, 6 /* Jul */, 10, hours, minutes, seconds, milliseconds);
}
