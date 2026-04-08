import { defineConfig } from "tsdown";

export default defineConfig({
	dts: { build: true, incremental: true },
	format: ["esm"],
	entry: [
		"./src/index.ts",
		"./src/types/index.ts",
		"./src/api/index.ts",
		"./src/integrations/node.ts",
	],
	treeshake: true,
	clean: true,
	unbundle: true,
});
