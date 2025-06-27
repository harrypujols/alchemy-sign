const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const yaml = require("js-yaml");

const dataDir = path.join(__dirname, "dev/data");
const templateDir = path.join(__dirname, "dev/templates");
const outputDir = path.join(__dirname, "dev/html");

fs.readdirSync(dataDir).forEach((file) => {
  let base, dataPath, templatePath, outputPath, data;

  if (file.endsWith(".json")) {
    base = path.basename(file, ".json");
    dataPath = path.join(dataDir, file);
    templatePath = path.join(templateDir, `${base}.hbs`);
    outputPath = path.join(outputDir, `${base}.html`);
    data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  } else if (file.endsWith(".yaml") || file.endsWith(".yml")) {
    base = path.basename(file, path.extname(file));
    dataPath = path.join(dataDir, file);
    templatePath = path.join(templateDir, `${base}.hbs`);
    outputPath = path.join(outputDir, `${base}.html`);
    data = yaml.load(fs.readFileSync(dataPath, "utf8"));
  } else {
    return;
  }

  if (fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, "utf8");
    const compiled = handlebars.compile(template);
    const output = compiled(data);
    fs.writeFileSync(outputPath, output, "utf8");
    console.log(`Rendered ${outputPath}`);
  } else {
    console.warn(`No template found for ${base}, skipping.`);
  }
});
