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
    
    // Replace text opacities safely
    content = content.replace(/text-brand-purple\/70/g, 'text-gray-600')
                     .replace(/text-brand-purple\/60/g, 'text-gray-500')
                     .replace(/text-brand-purple\/40/g, 'text-gray-400')
                     .replace(/fill-brand-purple\/60/g, 'fill-gray-500');

    // Replace strict text-brand-purple with black/gray-900
    content = content.replace(/text-brand-purple/g, 'text-gray-900');
    
    // Restore hover effects to keep that mix of brand colors during interaction
    content = content.replace(/hover:text-gray-900/g, 'hover:text-brand-purple');
    
    // SVG fills
    content = content.replace(/fill-brand-purple/g, 'fill-gray-900');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Typography updated to mature greys/blacks');
