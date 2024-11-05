// generateFrontmatter.js

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

function generateFrontmatter(filePath, locale) {
  const relativePath = path.relative(process.cwd(), filePath);
  const parsedPath = path.parse(filePath);

  const pathSegments = parsedPath.dir.split(path.sep).filter(segment => segment !== '' && segment !== `docs${path.sep}${locale}`);

  const slug = '/' + pathSegments.join('/') + '/' + parsedPath.name.replace(/_/g, '-');

  const id = parsedPath.name;

  const title = capitalizeWords(parsedPath.name.replace(/_/g, ' ').replace(/-/g, ' '));

  const sidebar_label = title;

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const parsed = matter(fileContent);

  const newFrontmatter = {
    id: id,
    title: title,
    sidebar_label: sidebar_label,
    slug: slug,
  };

  const updatedFrontmatter = { ...parsed.data, ...newFrontmatter };

  const newFileContent = matter.stringify(parsed.content, updatedFrontmatter);

  fs.writeFileSync(filePath, newFileContent, 'utf8');

  console.log(`Frontmatter atualizado para: ${relativePath}`);
}

function processDirectory(dir, locale) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath, locale);
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.md') {
      generateFrontmatter(fullPath, locale);
    }
  });
}

function main() {
  const supportedLocales = ['en', 'pt-BR']; // Adicione outros locales conforme necessário

  supportedLocales.forEach(locale => {
    const targetDir = path.join(process.cwd(), 'docs', locale);

    if (!fs.existsSync(targetDir)) {
      console.warn(`O diretório especificado para o locale "${locale}" não existe: ${targetDir}`);
      return;
    }

    console.log(`Iniciando a geração de frontmatter em: ${targetDir} para o locale: ${locale}`);
    processDirectory(targetDir, locale);
    console.log(`Geração de frontmatter concluída para o locale: ${locale}\n`);
  });

  console.log('Geração de frontmatter para todos os locales concluída!');
}

main();
