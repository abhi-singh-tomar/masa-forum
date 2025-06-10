const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseFolder = path.join(__dirname, 'src', 'assets');

const convertImagesRecursively = (folderPath) => {
  fs.readdir(folderPath, { withFileTypes: true }, (err, entries) => {
    if (err) return console.error(`❌ Error reading ${folderPath}:`, err);

    entries.forEach(entry => {
      const fullPath = path.join(folderPath, entry.name);

      if (entry.isDirectory()) {
        // Recurse into subfolder
        convertImagesRecursively(fullPath);
      } else {
        // Convert image if it's JPG/PNG
        const ext = path.extname(entry.name).toLowerCase();
        const name = path.basename(entry.name, ext);

        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const output = path.join(folderPath, `${name}.webp`);

          sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(output)
            .then(() => console.log(`✅ Converted: ${fullPath}`))
            .catch(err => console.error(`❌ Failed: ${fullPath}`, err));
        }
      }
    });
  });
};

// Start from base folder
convertImagesRecursively(baseFolder);
