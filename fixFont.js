
const fs = require('fs');
const path = require('path');

const reps = {
  'Alger, Alg�rie': 'Rabat, Maroc',
  'Alger, Algerie': ' Maroc',
  'en Algerie': 'au Maroc',
  'Ouargla, Algerie': 'Marrakech, Maroc',
  'Biskra, Algerie': 'Agadir, Maroc',
  'Oran, Algerie': 'Tanger, Maroc',
  'Ghardaia, Algerie': 'Fes, Maroc',
  'Constantine, Algerie': 'Oujda, Maroc',
  'toute l\'Algerie': 'tout le Maroc',
  'normes algeriennes': 'normes marocaines',
  'ALGER, ALGERIE': 'RABAT, MAROC',
  'MADE IN ALGERIA': 'MADE IN MOROCCO',
  'Algerie': 'Maroc',
  'Alg�rie': 'Maroc',
  'Alger': 'Casablanca'
};

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      traverse(p);
    } else if (p.endsWith('.tsx')) {
      let content = fs.readFileSync(p, 'utf8');
      let changed = false;
      for (const [k, v] of Object.entries(reps)) {
        if (content.includes(k)) {
          content = content.split(k).join(v);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(p, content, 'utf8');
      }
    }
  }
}

traverse('c:/Users/pc/Desktop/Stage PFE/solarGlow/components');
console.log('Done replacement');

