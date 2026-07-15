const fs = require('fs');
let content = fs.readFileSync('e:/Techmapperz_site/development/app/contact/ContactPageClient.js', 'utf8');

content = content.replace(/style="([^"]+)"/g, (match, styles) => {
  const parts = styles.split(';');
  const styleObj = {};
  parts.forEach(part => {
    if (!part.trim()) return;
    let [key, value] = part.split(':');
    key = key.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    styleObj[key] = value.trim();
  });
  return 'style={{ ' + Object.entries(styleObj).map(([k, v]) => k + ': \'' + v + '\'').join(', ') + ' }}';
});

content = content.replace(/font-size=/g, 'fontSize=');
content = content.replace(/font-weight=/g, 'fontWeight=');

fs.writeFileSync('e:/Techmapperz_site/development/app/contact/ContactPageClient.js', content);
console.log('Fixed inline styles');
