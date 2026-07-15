const fs = require('fs');
const html = fs.readFileSync('e:/Techmapperz_site/development/creare.html', 'utf8');

const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (cssMatch) {
  let css = cssMatch[1];
  
  // Replace :root with .career-page-wrapper
  css = css.replace(/:root/g, '.career-page-wrapper');
  
  // Replace body with .career-page-wrapper
  css = css.replace(/body\s*\{/g, '.career-page-wrapper {');
  
  // Split by '}' to get rules
  const rules = css.split('}');
  const scopedRules = rules.map(rule => {
    if (!rule.trim() || rule.includes('@media')) return rule;
    
    // Split by '{' to separate selectors and properties
    const parts = rule.split('{');
    if (parts.length === 2) {
      let selectors = parts[0].split(',').map(s => {
        let sel = s.trim();
        if (!sel || sel === '.career-page-wrapper' || sel.startsWith('@')) return sel;
        if (sel === 'html' || sel === 'body' || sel === '*') {
            return '.career-page-wrapper ' + sel;
        }
        return '.career-page-wrapper ' + sel;
      });
      return selectors.join(', ') + ' {' + parts[1];
    }
    return rule;
  });
  
  let finalCss = scopedRules.join('}\n') + '}';
  
  // Handing media query replacements (simplified)
  finalCss = finalCss.replace(/@media([^{]+)\{([\s\S]+?)\}\s*\}/g, (match, mq, content) => {
      // Just keep it as is, or we'd need to parse inner rules.
      // But nested rules might need scope. 
      return match;
  });
  
  fs.writeFileSync('e:/Techmapperz_site/development/app/career/career.css', finalCss);
  console.log('CSS extracted');
}
