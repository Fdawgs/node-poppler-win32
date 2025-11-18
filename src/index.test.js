"use strict";

const { join } = require("node:path");
// eslint-disable-next-line n/no-unsupported-features/node-builtins -- Tests, not in distributed code
const { describe, it } = require("node:test");
const binaryPath = require("./index");

/** @typedef {import('node:test').TestContext} TestContext */

describe("node-poppler-win32 export", () => {
	it("Returns the correct Poppler binary directory", (/** @type {TestContext} */ t) => {
		t.plan(1);
		const expectedSuffix = join("lib", "poppler-25.11.0", "Library", "bin");
		t.assert.strictEqual(binaryPath.endsWith(expectedSuffix), true);
	});
});
