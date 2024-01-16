var theme  = 'default';
const yaml   = require('js-yaml'),
      fs     = require('node:fs'),
      path   = require('node:path'),
      config = {
        css: fs.readFileSync(path.join(__dirname,'themes',theme,'document.css'), 'utf8'),
        highlight_style: 'vs2015',
        pdf_options: {
          format: 'a4',
          margin: '30mm 20mm',
          printBackground: true,
          headerTemplate: fs.readFileSync(path.join(__dirname,'themes',theme,'header.html'), 'utf8'),
          footerTemplate: fs.readFileSync(path.join(__dirname,'themes',theme,'footer.html'), 'utf8'),
        }
      };
module.exports = config ;
