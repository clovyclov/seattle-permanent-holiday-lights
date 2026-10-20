const fs = require('fs');
const html = fs.readFileSync('C:/Users/shrop/.gemini/antigravity/brain/2ae58dd6-ba4a-4e71-9259-5ee708af0986/.system_generated/steps/114/content.md', 'utf8');

const headings = html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
console.log('--- HEADINGS ---');
headings.forEach(h => {
  const clean = h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length > 2) console.log(clean);
});

const regex = /https?:\/\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp)/gi;
const imgs = html.match(regex) || [];
console.log('--- IMAGES ---');
console.log([...new Set(imgs)].slice(0, 30));
