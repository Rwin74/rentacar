const fs = require('fs');
let content = fs.readFileSync('src/data/knowledge.ts', 'utf8');
content = content.replace(/,\\n  \{/g, ',\n  {');
content = content.replace(/  \}\\n\];\\n/g, '  }\n];\n');
fs.writeFileSync('src/data/knowledge.ts', content, 'utf8');
console.log('Fixed newlines');
