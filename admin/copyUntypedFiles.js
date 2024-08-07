/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of the docusaurus repository.
 *
 * Modified by Ewan Lyon for the Speedrun-Docs project
 *
 */

const fs = require("fs-extra");
const path = require("path");
const chokidar = require("chokidar");

const srcDir = path.join(process.cwd(), "src");
const libDir = path.join(process.cwd(), "lib");

const ignoredPattern = /(?:__tests__|\.tsx?$)/;

async function copy() {
	await fs.copy(srcDir, libDir, {
		filter(testedPath) {
			return !ignoredPattern.test(testedPath);
		},
	});
}

async function runCopy() {
	if (process.argv.includes("--watch")) {
		const watcher = chokidar.watch(srcDir, {
			ignored: ignoredPattern,
			ignoreInitial: true,
			persistent: true,
		});
		["add", "change", "unlink", "addDir", "unlinkDir"].forEach((event) => watcher.on(event, copy));
	} else {
		await copy();
	}
}

runCopy();
