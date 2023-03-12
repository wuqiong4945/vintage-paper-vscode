import fs from 'fs';
import YAML from 'yaml';

const source_file = "src/vintage-paper-theme.yml";
const target_file = "themes/vintage-paper-theme.json";

const source = YAML.parse(fs.readFileSync(source_file, 'utf-8'));
const json: string = JSON.stringify(source);
fs.writeFileSync(target_file, json);
console.log(`Writing json string to "${target_file}"...`);
console.log("Done!!!\n");