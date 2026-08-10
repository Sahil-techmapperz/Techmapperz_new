const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'preview (4).html');
const outPath = path.join(__dirname, 'public', 'Photos', 'drone_partnership_visual.jpg');

const html = fs.readFileSync(htmlPath, 'utf8');
const match = html.match(/src="data:image\/jpeg;base64,([^"]+)"/);

if (match && match[1]) {
  const base64Data = match[1];
  const buffer = Buffer.from(base64Data, 'base64');
  
  if (!fs.existsSync(path.dirname(outPath))) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
  }
  
  fs.writeFileSync(outPath, buffer);
  console.log('Successfully extracted image to', outPath);
} else {
  console.error('Could not find base64 image in HTML.');
}
