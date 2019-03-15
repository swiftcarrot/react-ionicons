const path = require('path');
const glob = require('fast-glob');
const capitalize = require('lodash/capitalize');

glob(path.join(__dirname, './src/*.js')).then(entries => {
  const file = entries
    .map(entry => {
      const filename = path.basename(entry, '.js');
      if (filename === 'index') return '';
      const exportName = filename
        .split('-')
        .map(capitalize)
        .join('');
      return `export ${exportName} from './${filename}';`;
    })
    .join('\n');

  console.log(file);
});
