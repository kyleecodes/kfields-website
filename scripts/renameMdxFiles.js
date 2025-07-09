```
Script to rename posts files
Run from root dir: node scripts/renameMdxFiles.js
```

const fs = require('fs');
const path = require('path');

const postsDir = path.resolve(__dirname, '../posts');

function sanitizeFilename(title) {
  return title
    .toLowerCase()
    .replace(/\W+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function parseFrontmatter(content) {
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') return { date: null, title: null };

  let date = null;
  let title = null;

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') break;

    const [key, ...rest] = lines[i].split(':');
    const value = rest.join(':').trim().replace(/^["']|["']$/g, '');

    if (key.trim() === 'date') date = value;
    if (key.trim() === 'title') title = value;
  }

  return { date, title };
}

function renameFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    if (file.endsWith('.mdx') && file.startsWith('test')) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const validFile = fs.lstatSync(filePath).isFile();
      if (!validFile) {
        console.log(`Skipping ${file}: not a valid file.`);
        return;
      }

      const { date, title } = parseFrontmatter(content);

      if (!date || !title) {
        console.log(`Skipping ${file}: missing title or date.`);
        return;
      }

      const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (!match) {
        console.log(`Skipping ${file}: invalid date format.`);
        return;
      }

      const formattedDate = `${match[3]}${match[2]}${match[1]}`;
      const safeTitle = sanitizeFilename(title);
      const newFilename = `${formattedDate}_${safeTitle}.mdx`;

      const newPath = path.join(dir, newFilename);
      fs.renameSync(filePath, newPath);
      console.log(`Renamed ${file} -> ${newFilename}`);
    }
  });
}

renameFiles(postsDir);
