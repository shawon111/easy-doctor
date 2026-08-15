import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesRoot = path.join(__dirname, "../src/components/templates");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.name.endsWith(".jsx")) return [fullPath];
    return [];
  });
}

const files = walk(templatesRoot);
let patched = 0;

for (const filePath of files) {
  let source = fs.readFileSync(filePath, "utf8");
  const original = source;

  if (source.includes("content?.pages?.") && source.includes("?? template")) {
    if (!source.includes("resolveTemplateContent")) {
      source = source.replace(
        /(import \{ template(?:One|Two|Three)Defaults \} from "@\/content\/defaults\/template-(?:one|two|three)";\n)/,
        '$1import { resolveTemplateContent } from "@/lib/content/resolve-template-content";\n'
      );
    }

    source = source.replace(
      /content(\?\.pages\?\.\w+)\s*\?\?\s*(template(?:One|Two|Three)Defaults\.pages\.\w+)/g,
      "resolveTemplateContent(content$1, $2, isDemo)"
    );
  }

  if (
    (filePath.endsWith("TemplateOne.jsx") || filePath.endsWith("TemplateTwo.jsx")) &&
    source.includes("resolveTemplateContent") &&
    !source.includes("resolve-template-content")
  ) {
    source = source.replace(
      /(import \{ template(?:One|Two)Defaults \} from "@\/content\/defaults\/template-(?:one|two)";\n)/,
      '$1import { resolveTemplateContent } from "@/lib/content/resolve-template-content";\n'
    );
  }

  if (filePath.endsWith("GoldDividerTwoDark.jsx")) {
    source = source.replace(
      "export default function GoldDividerTwoDark() {",
      "export default function GoldDividerTwoDark({ isDemo = false }) {"
    );
  }

  if (source !== original) {
    fs.writeFileSync(filePath, source);
    patched += 1;
  }
}

console.log(`Patched ${patched} files.`);

const missing = files.filter(
  (filePath) => !fs.readFileSync(filePath, "utf8").includes("isDemo")
);
console.log(`Missing isDemo: ${missing.length}`);
missing.forEach((filePath) => console.log(filePath));
