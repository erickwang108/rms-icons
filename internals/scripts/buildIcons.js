const fs = require('fs');
const path = require('path');

const FILE_REGEXP = /^[A-Z]\w*\.js$/;

// Icon fodler
const sourcePath = path.resolve(process.cwd(), 'src');

// Read all icon name
const iconFileNames = fs.readdirSync(path.resolve(sourcePath, 'icons'));
const exportFileNames = iconFileNames.reduce((list, filename) => {
  if (FILE_REGEXP.test(filename)) {
    const name = filename.replace(/\.js$/, '');
    list.push(`export { default as ${name} } from './icons/${filename}';\r\n`);
  }

  return list;
}, []);

if (exportFileNames.length > 0) {
  fs.writeFileSync(`${sourcePath}/index.js`, exportFileNames.join(''), { flag: 'w+' });
}
