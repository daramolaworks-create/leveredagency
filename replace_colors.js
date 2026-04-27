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
    content = content
      .replace(/\[#6E026F\]/g, 'brand-purple')
      .replace(/#6E026F/ig, '#5837C2')
      .replace(/\[#F1E6C9\]/g, 'white')
      .replace(/#1a1a1a/ig, '#1a1a1a') // text remains dark
      .replace(/#F1E6C9/ig, '#FFFFFF')
      .replace(/brand-orange/g, 'brand-yellow')
      .replace(/\[#FA891A\]/g, 'brand-yellow')
      .replace(/#FA891A/ig, '#F3C770')
      .replace(/brand-teal/g, 'brand-blue')
      .replace(/brand-cream/g, 'white')
      .replace(/\[#ABDADC\]/g, 'brand-blue')
      .replace(/#ABDADC/ig, '#74BDF8')
      // Make semi-transparent backgrounds look good on white instead of white/30 which is invisible on white
      .replace(/bg-white\/30/g, 'bg-brand-purple/5')
      .replace(/glass/g, 'glass'); // keeping glass class
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Replaced colors in all files');
