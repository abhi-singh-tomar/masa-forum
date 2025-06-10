const fs = require('fs');
const path = require('path');

const baseFolder = path.join(__dirname, 'src', 'assets');
const backupFolder = path.join(__dirname, 'image-backup');

const moveOldImagesRecursively = (folderPath) => {
  fs.readdir(folderPath, { withFileTypes: true }, (err, entries) => {
    if (err) return console.error(`❌ Error reading ${folderPath}:`, err);

    entries.forEach(entry => {
      const fullPath = path.join(folderPath, entry.name);

      if (entry.isDirectory()) {
        moveOldImagesRecursively(fullPath); // recurse
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const relativePath = path.relative(baseFolder, fullPath);
          const backupPath = path.join(backupFolder, relativePath);

          // Make sure the subfolder exists
          fs.mkdir(path.dirname(backupPath), { recursive: true }, () => {
            fs.rename(fullPath, backupPath, (err) => {
              if (err) console.error(`❌ Failed to move ${fullPath}`, err);
              else console.log(`📦 Moved to backup: ${relativePath}`);
            });
          });
        }
      }
    });
  });
};

// Start
moveOldImagesRecursively(baseFolder);
