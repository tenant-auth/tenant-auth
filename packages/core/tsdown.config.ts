import { readFile } from "node:fs/promises";
import { defineConfig } from "tsdown";

const packageJson = JSON.parse(
	await readFile(new URL("./package.json", import.meta.url), "utf-8"),
);

export default defineConfig({
	dts: { build: true, incremental: true },
	format: ["esm"],
	entry: [
		"./src/index.ts",
		"./src/api/index.ts",
	],
	env: {
		MULTI_TENANCY_VERSION: packageJson.version,
	},
	unbundle: true,
	treeshake: true,
	clean: true,
});
