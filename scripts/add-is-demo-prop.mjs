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

function addIsDemoToProps(source) {
  if (/\bisDemo\b/.test(source)) {
    return source;
  }

  const patterns = [
    [
      /^(\s*export default function \w+\(\{[\s\S]*?)(\}\)\s*(?:=>|\{))/m,
      "$1, isDemo = false$2",
    ],
    [
      /^(\s*const \w+ = \(\{[\s\S]*?)(\}\)\s*=>)/m,
      "$1, isDemo = false$2",
    ],
    [
      /^(\s*const \w+ = \(\{[\s\S]*?)(\}\)\s*\{)/m,
      "$1, isDemo = false$2",
    ],
    [
      /^(\s*function \w+\(\{[\s\S]*?)(\}\)\s*\{)/m,
      "$1, isDemo = false$2",
    ],
    [
      /^(\s*export default function \w+\(\{[\s\S]*?)(\}\)\s*\{)/m,
      "$1, isDemo = false$2",
    ],
  ];

  for (const [pattern, replacement] of patterns) {
    if (/\bisDemo\b/.test(source)) {
      break;
    }
    source = source.replace(pattern, replacement);
  }

  return source;
}

function addResolveImport(source) {
  if (source.includes("resolveTemplateContent")) {
    return source;
  }

  const defaultsImport = source.match(
    /import \{ template(?:One|Two|Three)Defaults \} from "@\/content\/defaults\/template-(?:one|two|three)";\n/
  );

  if (!defaultsImport) {
    return source;
  }

  return source.replace(
    defaultsImport[0],
    `${defaultsImport[0]}import { resolveTemplateContent } from "@/lib/content/resolve-template-content";\n`
  );
}

function replaceContentFallback(source) {
  return source.replace(
    /content(\?\.[\w.]+)\s*\?\?\s*(template(?:One|Two|Three)Defaults\.[\w.]+)/g,
    "resolveTemplateContent(content$1, $2, isDemo)"
  );
}

function fixBrokenSelfClosingTags(source) {
  return source
    .replace(/\s+\/\s+isDemo=\{isDemo\}>/g, " isDemo={isDemo} />")
    .replace(/\s+\/\s+isDemo=\{isDemo\}\/>/g, " isDemo={isDemo} />");
}

function passIsDemoToTemplateChildren(source) {
  return source.replace(
    /<([A-Z][A-Za-z0-9]*)\b([^>/]*?)(\/?)>/g,
    (match, tag, attrs, selfClose) => {
      if (attrs.includes("isDemo=")) {
        return match;
      }

      if (
        tag === "Reveal" ||
        tag === "RevealTwo" ||
        tag === "FadeInThree" ||
        tag === "SectionFadeTwoDark" ||
        tag === "SectionFadeOneDark" ||
        tag === "GlassCardRevealOneDark" ||
        tag === "ParallaxImageThree" ||
        tag === "AccordionThree" ||
        tag === "AccordionTwoDark" ||
        tag === "AccordionDarkThree" ||
        tag === "Button" ||
        tag === "Link" ||
        tag === "React" ||
        tag === "Fragment"
      ) {
        return match;
      }

      if (selfClose === "/") {
        const trimmedAttrs = attrs.trim();
        const spacer = trimmedAttrs ? " " : " ";
        return `<${tag}${attrs}${spacer}isDemo={isDemo} />`;
      }

      if (!/[A-Z]/.test(tag.charAt(1))) {
        return match;
      }

      const trimmedAttrs = attrs.trim();
      const spacer = trimmedAttrs ? " " : " ";
      return `<${tag}${attrs}${spacer}isDemo={isDemo}>`;
    }
  );
}

function updatePageRenderer(source) {
  source = addIsDemoToProps(source);
  source = fixBrokenSelfClosingTags(source);

  source = source.replace(
    /<Template(?:One|Two|Three)(?:Dark)?\b([^>]*?)>/g,
    (match, attrs) => {
      if (attrs.includes("isDemo=")) return match;
      return match.replace(/\/?>$/, (ending) =>
        ending === ">" ? " isDemo={isDemo}>" : " isDemo={isDemo} />"
      );
    }
  );

  source = source.replace(
    /<PageComponent\b([^>]*?)>/g,
    (match, attrs) => {
      if (attrs.includes("isDemo=")) return match;
      if (match.endsWith("/>")) {
        return match.replace(/\/>$/, " isDemo={isDemo} />");
      }
      return match.replace(/>$/, " isDemo={isDemo}>");
    }
  );

  return source;
}

function updateTemplateWrapper(source) {
  source = addIsDemoToProps(source);
  source = addResolveImport(source);
  source = replaceContentFallback(source);
  source = fixBrokenSelfClosingTags(source);

  source = source.replace(
    /const siteContent = \{\s*header: content\?\.header \?\? templateThreeDefaults\.header,\s*footer: content\?\.footer \?\? templateThreeDefaults\.footer,\s*\};/,
    `const siteContent = {
    header: resolveTemplateContent(content?.header, templateThreeDefaults.header, isDemo),
    footer: resolveTemplateContent(content?.footer, templateThreeDefaults.footer, isDemo),
  };`
  );

  source = source.replace(
    /<Header(?:One|Two|Three|OneDark|TwoDark|DarkThree)?\b([^>]*?)\/>/g,
    (match, attrs) => {
      if (attrs.includes("isDemo=")) return match;
      return `<Header${attrs.slice(0, 3)}${attrs.slice(3)} isDemo={isDemo} />`.replace(
        "<Header",
        match.match(/<Header[^ ]*/)[0]
      );
    }
  );

  source = source.replace(
    /<Footer(?:One|Two|Three|OneDark|TwoDark|DarkThree)?\b([^>]*?)\/>/g,
    (match) => {
      if (match.includes("isDemo=")) return match;
      return match.replace(/\/>$/, " isDemo={isDemo} />");
    }
  );

  source = source.replace(
    /<BackgroundBlobsOneDark\b([^>]*?)\/>/g,
    (match) => {
      if (match.includes("isDemo=")) return match;
      return match.replace(/\/>$/, " isDemo={isDemo} />");
    }
  );

  return source;
}

function updatePageAggregator(source) {
  source = addIsDemoToProps(source);
  source = addResolveImport(source);
  source = replaceContentFallback(source);
  source = fixBrokenSelfClosingTags(source);

  source = source.replace(
    /user=\{content\?\.user\}/g,
    "user={isDemo ? undefined : content?.user}"
  );

  return passIsDemoToTemplateChildren(source);
}

function updateHeaderFooter(source) {
  source = addIsDemoToProps(source);
  source = fixBrokenSelfClosingTags(source);
  return passIsDemoToTemplateChildren(source);
}

function updateUserAwareComponent(source) {
  source = addIsDemoToProps(source);

  if (source.includes("user.experience")) {
    source = source.replace(
      /\{user\.experience \? \(/g,
      "{!isDemo && user.experience ? ("
    );
  }

  if (source.includes("user.languages")) {
    source = source.replace(
      /const languages = user\.languages \|\| \[\];/g,
      "const languages = isDemo ? [] : user.languages || [];"
    );
  }

  if (source.includes("user.bio")) {
    source = source.replace(
      /const bioParagraphs = user\.bio \? user\.bio\.split\("\\n\\n"\) : \[\];/g,
      "const bioParagraphs = isDemo ? [] : user.bio ? user.bio.split(\"\\n\\n\") : [];"
    );
  }

  if (source.includes("user.experience ? `${user.experience}+`")) {
    source = source.replace(
      /const experienceStat = user\.experience \? `\$\{user\.experience\}\+` : "25\+";/g,
      'const experienceStat = !isDemo && user.experience ? `${user.experience}+` : "25+";'
    );
  }

  source = fixBrokenSelfClosingTags(source);
  return passIsDemoToTemplateChildren(source);
}

function updateSectionComponent(source) {
  source = addIsDemoToProps(source);
  source = fixBrokenSelfClosingTags(source);
  return passIsDemoToTemplateChildren(source);
}

const userAwareFiles = new Set([
  "AboutHeroOne.jsx",
  "AboutBioStatsOne.jsx",
  "AboutHeroOneDark.jsx",
  "AboutBioStatsOneDark.jsx",
  "AboutHeroTwo.jsx",
  "AboutHeroTwoDark.jsx",
  "TimelineTwo.jsx",
  "TimelineTwoDark.jsx",
]);

const pageRenderers = new Set([
  "TemplateOnePageRenderer.jsx",
  "TemplateOneDarkPageRenderer.jsx",
  "TemplateTwoPageRenderer.jsx",
  "TemplateTwoDarkPageRenderer.jsx",
  "TemplateThreePageRenderer.jsx",
  "TemplateThreeDarkPageRenderer.jsx",
]);

const templateWrappers = new Set([
  "TemplateOne.jsx",
  "TemplateOneDark.jsx",
  "TemplateTwo.jsx",
  "TemplateTwoDark.jsx",
  "TemplateThree.jsx",
  "TemplateThreeDark.jsx",
]);

const pageAggregators = new Set([
  "HomeOne.jsx",
  "HomeOneDark.jsx",
  "HomePageTwo.jsx",
  "HomeTwoDark.jsx",
  "HomeThree.jsx",
  "HomePageDarkThree.jsx",
  "AboutPageOne.jsx",
  "AboutPageOneDark.jsx",
  "AboutPageTwo.jsx",
  "AboutPageTwoDark.jsx",
  "AboutPageThree.jsx",
  "AboutPageDarkThree.jsx",
  "ServicesPageOne.jsx",
  "ServicesPageOneDark.jsx",
  "ServicesPageTwo.jsx",
  "ServicesPageTwoDark.jsx",
  "ServicesPageThree.jsx",
  "ServicesPageDarkThree.jsx",
  "AppointmentPageOne.jsx",
  "AppointmentPageOneDark.jsx",
  "AppointmentPageTwo.jsx",
  "AppointmentPageTwoDark.jsx",
  "AppointmentPageThree.jsx",
  "AppointmentPageDarkThree.jsx",
]);

const headerFooterFiles = new Set([
  "Header.jsx",
  "HeaderOneDark.jsx",
  "HeaderTwo.jsx",
  "HeaderTwoDark.jsx",
  "HeaderThree.jsx",
  "HeaderDarkThree.jsx",
  "Footer.jsx",
  "FooterOneDark.jsx",
  "FooterTwo.jsx",
  "FooterTwoDark.jsx",
  "FooterThree.jsx",
  "FooterDarkThree.jsx",
  "Navbar.jsx",
  "NavbarOneDark.jsx",
  "NavbarTwo.jsx",
  "NavbarTwoDark.jsx",
  "NavbarThree.jsx",
  "NavbarDarkThree.jsx",
]);

const files = walk(templatesRoot);
let updated = 0;

for (const filePath of files) {
  const fileName = path.basename(filePath);
  let source = fs.readFileSync(filePath, "utf8");
  const original = source;

  source = fixBrokenSelfClosingTags(source);

  if (pageRenderers.has(fileName)) {
    source = updatePageRenderer(source);
  } else if (templateWrappers.has(fileName)) {
    source = updateTemplateWrapper(source);
  } else if (pageAggregators.has(fileName)) {
    source = updatePageAggregator(source);
  } else if (userAwareFiles.has(fileName)) {
    source = updateUserAwareComponent(source);
  } else if (headerFooterFiles.has(fileName)) {
    source = updateHeaderFooter(source);
  } else {
    source = updateSectionComponent(source);
  }

  if (source !== original) {
    fs.writeFileSync(filePath, source);
    updated += 1;
  }
}

console.log(`Updated ${updated} template files.`);

const missing = files.filter((filePath) => !fs.readFileSync(filePath, "utf8").includes("isDemo"));
console.log(`Missing isDemo: ${missing.length}`);
