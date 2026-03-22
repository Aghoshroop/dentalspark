const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join('c:', 'Users', 'aviroop', 'Desktop', 'dentalspark', 'src', 'components'),
  path.join('c:', 'Users', 'aviroop', 'Desktop', 'dentalspark', 'src', 'app')
];

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let modified = false;

      // 1. Fix grid minmax (e.g. minmax(280px, 1fr) -> minmax(min(100%, 280px), 1fr))
      if (/minmax\(\s*\d+px\s*,/.test(content)) {
        content = content.replace(/minmax\(\s*(\d+px)\s*,/g, 'minmax(min(100%, $1),');
        modified = true;
      }
      
      // 2. Fix hardcoded widths causing overflows
      if (/width:\s*"(200|250|280|300|320|350|400|420|500|600|800)px"/.test(content)) {
        content = content.replace(/width:\s*"(200|250|280|300|320|350|400|420|500|600|800)px"/g, 'width: "100%", maxWidth: "$1px"');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

targetDirs.forEach(processDir);

// Inject Global CSS Overrides
const cssPath = path.join('c:', 'Users', 'aviroop', 'Desktop', 'dentalspark', 'src', 'app', 'globals.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf-8');
  if (!css.includes('ULTRA RESPONSIVE')) {
    css += `
/* ULTRA RESPONSIVE 200px+ OVERRIDES */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
* {
  box-sizing: border-box;
}
@media (max-width: 600px) {
  .container {
    padding: 0 1rem !important;
    width: 100% !important;
  }
  .section, main, header, footer {
    max-width: 100vw !important;
    overflow-x: hidden !important;
  }
  .glass-card, [style*="borderRadius: 24px"], [style*="borderRadius: 20px"] {
    padding: clamp(1rem, 5vw, 1.5rem) !important;
  }
  h1, h2 {
    font-size: clamp(1.8rem, 8vw, 2.5rem) !important;
  }
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem !important;
  }
}
@media (max-width: 350px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }
  header .container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  input, select, textarea, button {
    width: 100% !important;
  }
  img {
    max-width: 100%;
    height: auto !important;
  }
  [style*="display: grid"] {
    grid-template-columns: 1fr !important;
  }
  form[style*="display: grid"], .formGrid, [style*="gridTemplateColumns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}
`;
    fs.writeFileSync(cssPath, css);
  }
}

console.log("Responsive patch complete.");
