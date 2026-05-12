import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "package.json",
  "README.md",
  "scripts/setup-open-canvas.sh",
  "scripts/validate-open-canvas-wrapper.mjs",
];

await Promise.all(
  requiredFiles.map((file) => access(new URL(`../${file}`, import.meta.url))),
);

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
const packageJson = await readFile(
  new URL("../package.json", import.meta.url),
  "utf8",
);

const requiredReadmeTerms = [
  "LangChain Open Canvas",
  "pnpm editor:setup",
  "pnpm editor:dev:web",
];
const missingReadmeTerms = requiredReadmeTerms.filter(
  (term) => !readme.includes(term),
);

if (missingReadmeTerms.length > 0) {
  throw new Error(`Editor README is missing: ${missingReadmeTerms.join(", ")}`);
}

const pkg = JSON.parse(packageJson);
const requiredScripts = [
  "setup",
  "build",
  "dev:agents",
  "dev:web",
  "validate",
  "clean",
];
const missingScripts = requiredScripts.filter(
  (script) => !pkg.scripts?.[script],
);

if (missingScripts.length > 0) {
  throw new Error(
    `Editor package.json is missing scripts: ${missingScripts.join(", ")}`,
  );
}

console.log("Open Canvas editor wrapper configuration is valid.");
