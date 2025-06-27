const fs = require("fs");
const path = require("path");
const mustache = require("mustache");

const dataDir = path.join(__dirname, "dev/data");
const templateDir = path.join(__dirname, "dev/templates");
const outputDir = path.join(__dirname, "docs");

fs.readdirSync(dataDir).forEach((file) => {
  if (file.endsWith(".json")) {
    const base = path.basename(file, ".json");
    const dataPath = path.join(dataDir, `${base}.json`);
    const templatePath = path.join(templateDir, `${base}.mustache`);
    const outputPath = path.join(outputDir, `${base}.html`);

    if (fs.existsSync(templatePath)) {
      const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      const template = fs.readFileSync(templatePath, "utf8");
      const output = mustache.render(template, data);
      fs.writeFileSync(outputPath, output, "utf8");
      console.log(`Rendered ${outputPath}`);
    } else {
      console.warn(`No template found for ${base}, skipping.`);
    }
  }
});
