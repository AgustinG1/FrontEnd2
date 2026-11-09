const { copyFileSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const output = join(__dirname, '..', 'build');
copyFileSync(join(output, 'index.html'), join(output, '404.html'));
writeFileSync(join(output, '.nojekyll'), '');
