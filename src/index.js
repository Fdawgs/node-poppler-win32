"use strict";

const { resolve } = require("node:path");

const binaryPath = resolve(
	__dirname,
	"lib",
	"poppler-25.11.0",
	"Library",
	"bin"
);

module.exports = binaryPath;
