const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'hero-bg.jpg', width: 1920, height: 1080, category: 'gaming' },
  { name: 'game1.jpg', width: 800, height: 600, category: 'cyberpunk' },
  { name: 'game2.jpg', width: 800, height: 600, category: 'fantasy' },
  { name: 'game3.jpg', width: 800, height: 600, category: 'space' },
  { name: 'about-hero.jpg', width: 1920, height: 1080, category: 'office' },
  { name: 'mission.jpg', width: 800, height: 600, category: 'technology' },
  { name: 'team1.jpg', width: 400, height: 400, category: 'person' },
  { name: 'team2.jpg', width: 400, height: 400, category: 'person' },
  { name: 'team3.jpg', width: 400, height: 400, category: 'person' },
  { name: 'office.jpg', width: 800, height: 600, category: 'office' },
];

const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

images.forEach(img => {
  const url = `https://source.unsplash.com/random/${img.width}x${img.height}/?${img.category}`;
  const filePath = path.join(publicDir, img.name);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      console.log(`Downloaded: ${img.name}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${img.name}:`, err.message);
  });
}); 