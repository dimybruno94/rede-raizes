import fs from 'node:fs';
const html = fs.readFileSync(new URL('../index.html', import.meta.url),'utf8');
const js = fs.readFileSync(new URL('../src/app.js', import.meta.url),'utf8');
const css = fs.readFileSync(new URL('../src/styles.css', import.meta.url),'utf8');
const core = fs.readFileSync(new URL('../src/core.js', import.meta.url),'utf8');
const checks = [
 ['entrypoint JS', html.includes('./src/app.js')],
 ['checkout', js.includes("case 'checkout'")],
 ['tracking', js.includes("case 'order'")],
 ['totem', js.includes("channel === 'totem'") && css.includes('body.totem-mode')],
 ['LGPD export', js.includes('downloadData')],
 ['LGPD delete', js.includes('deleteAccount')],
 ['payment minimization', core.includes('FORBIDDEN_STORAGE_KEYS') && core.includes('cardNumber') && js.includes('coreSanitizeStorage(localStorage)')],
 ['responsive CSS', css.includes('@media (max-width: 680px)')],
];
let failed=0;
for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} - ${name}`); if(!ok)failed++;}
if(failed)process.exit(1);
console.log(`\n${checks.length}/${checks.length} verificações estáticas aprovadas.`);
