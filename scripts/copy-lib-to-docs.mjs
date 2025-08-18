import { mkdir, copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.resolve(root, 'dist');
const docsPublicDir = path.resolve(root, 'docs', 'public', 'boardwalk');

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const files = ['boardwalk.es.js', 'boardwalk.umd.js'];

  const distExists = await exists(distDir);
  if (!distExists) {
    console.error('[copy-lib-to-docs] dist/ not found. Run "npm run build" first.');
    process.exit(1);
  }

  await mkdir(docsPublicDir, { recursive: true });

  for (const file of files) {
    const src = path.join(distDir, file);
    const dest = path.join(docsPublicDir, file);
    const srcExists = await exists(src);
    if (!srcExists) {
      console.warn(`[copy-lib-to-docs] ${file} not found in dist/. Skipping.`);
      continue;
    }
    await copyFile(src, dest);
    console.log(`[copy-lib-to-docs] Copied ${file} -> ${path.relative(root, dest)}`);
  }
}

main().catch((err) => {
  console.error('[copy-lib-to-docs] Error:', err);
  process.exit(1);
});
