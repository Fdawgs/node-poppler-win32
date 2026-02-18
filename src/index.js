/**
 * Copyright (C) 2025-present Frazer Smith <frazer.dev@icloud.com>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

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
