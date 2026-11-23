// One Letter: Coffee or Tea — the entry is a single letter, A for coffee.
// A: coffee wins the house's standing answer — the drink that fuels builders.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "A");
