import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Strip extreme tropes that scream "AI" or "Brutalist"
    content = content
      .replace(/ uppercase /g, ' ')
      .replace(/uppercase /g, '')
      .replace(/ tracking-widest /g, ' ')
      .replace(/tracking-widest /g, '')
      .replace(/tracking-\[0\.2em\]/g, 'tracking-wide')
      .replace(/tracking-tighter/g, 'tracking-tight')
      .replace(/font-black/g, 'font-semibold')
      
      // Elevate the radii
      .replace(/rounded-sm/g, 'rounded-full') // Buttons use full pill shapes
      .replace(/shadow-xl shadow-brand-purple\/20/g, 'shadow-sm shadow-slate-200/50')
      .replace(/border-brand-purple\/10/g, 'border-slate-100')
      
      // Mute backgrounds and structural colors
      .replace(/bg-brand-purple\/5/g, 'bg-slate-50 border-y border-slate-100/50') 
      
      // Softer borders for elements rather than harsh colored borders
      .replace(/border-brand-yellow/g, 'border-slate-100 rounded-2xl');
      
    // Fix multiple spaces
    content = content.replace(/  +/g, ' ');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Design tropes universally refactored.');
