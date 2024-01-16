# mikroways md2pdf theme

This module exposes [md-to-pdf](https://www.npmjs.com/package/md-to-pdf)
configuration to be used with [Mikroways](https://mikroways.net) theme.

## Usage

Install this package with npm:

```bash
npm i --save @mikroways/md2pdf-theme
```

And it will install md-to-pdf as dependency and provides a script to be used as
its configuration:

```bash
curl -o /tmp/sample.md -L \
  https://raw.githubusercontent.com/Mikroways/md2pdf-theme/main/README.md
node_modules/.bin/md-to-pdf \
  --document-title "Test document" \
  --config-file node_modules/@mikroways/md2pdf-theme/config.js \
  /tmp/sample.md
```

Output pdf will be at `/tmp/sample.pdf`
