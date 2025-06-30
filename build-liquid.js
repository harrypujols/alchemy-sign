const fs = require("fs");
const path = require("path");
const { Liquid } = require("liquidjs");
const yaml = require("js-yaml");

const dataDir = path.join(__dirname, "dev/data");
const templateDir = path.join(__dirname, "dev/templates");
const outputDir = path.join(__dirname, "dev/html");

const engine = new Liquid({
  root: templateDir,
  extname: ".liquid",
});

fs.readdirSync(dataDir).forEach((file) => {
  let base, dataPath, templatePath, outputPath, data;

  if (file.endsWith(".json")) {
    base = path.basename(file, ".json");
    dataPath = path.join(dataDir, file);
    templatePath = path.join(templateDir, `${base}.liquid`);
    outputPath = path.join(outputDir, `${base}.html`);
    data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  } else if (file.endsWith(".yaml") || file.endsWith(".yml")) {
    base = path.basename(file, path.extname(file));
    dataPath = path.join(dataDir, file);
    templatePath = path.join(templateDir, `${base}.liquid`);
    outputPath = path.join(outputDir, `${base}.html`);
    data = yaml.load(fs.readFileSync(dataPath, "utf8"));
  } else {
    return;
  }

  if (fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, "utf8");
    engine
      .parseAndRender(template, data)
      .then((output) => {
        fs.writeFileSync(outputPath, output, "utf8");
        console.log(`Rendered ${outputPath}`);
      })
      .catch((err) => {
        console.error(`Error rendering ${base}:`, err);
      });
  } else {
    console.warn(`No template found for ${base}, skipping.`);
  }
});
