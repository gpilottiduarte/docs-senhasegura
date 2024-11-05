// fix_mdx_errors.js

const fs = require('fs');
const path = require('path');

/**
 * Função para corrigir erros comuns de MDX em arquivos Markdown.
 * @param {string} content - Conteúdo do arquivo Markdown.
 * @returns {string} - Conteúdo corrigido.
 */
function fixMdxContent(content) {
  let fixedContent = content;

  // 1. Corrigir barras de fechamento inesperadas "/"
  // Exemplo: </Tag> sem <Tag>
  fixedContent = fixedContent.replace(/<\/([a-zA-Z]+)>/g, (match, p1, offset, string) => {
    // Verifica se há uma tag de abertura correspondente antes
    const openingTagRegex = new RegExp(`<${p1}[^>]*>`, 'g');
    const beforeMatch = string.slice(0, offset);
    const openingTags = beforeMatch.match(openingTagRegex);
    if (openingTags && openingTags.length > 0) {
      return match; // Mantém a tag de fechamento se houver uma abertura
    } else {
      console.warn(`Tag de fechamento inesperada encontrada: ${match}`);
      return ''; // Remove a tag de fechamento inesperada
    }
  });

  // 2. Converter caracteres '!' inesperados em comentários JSX
  // Exemplo: ! Isso é um comentário -> {/* Isso é um comentário */}
  fixedContent = fixedContent.replace(/^!\s*(.*)$/gm, (match, p1) => {
    return `{/* ${p1.trim()} */}`;
  });

  // 3. Garantir que todas as tags <code> estejam fechadas
  fixedContent = fixedContent.replace(/<code>/g, '<code>');
  fixedContent = fixedContent.replace(/<\/code>/g, '</code>');

  // Verificar e fechar tags <code> não fechadas
  const codeTagRegex = /<code>(?!<\/code>)/g;
  fixedContent = fixedContent.replace(codeTagRegex, '<code>');

  // 4. Garantir que todas as tags <span> estejam fechadas
  fixedContent = fixedContent.replace(/<span>/g, '<span>');
  fixedContent = fixedContent.replace(/<\/span>/g, '</span>');

  // Verificar e fechar tags <span> não fechadas
  const spanTagRegex = /<span>(?!<\/span>)/g;
  fixedContent = fixedContent.replace(spanTagRegex, '<span>');

  // 5. Remover caracteres '/' antes de nomes de tags inválidas
  // Exemplo: /Tag -> <Tag> ou { /* Tag */ }
  fixedContent = fixedContent.replace(/\/([A-Za-z]+)/g, (match, p1) => {
    // Se "/Tag" estiver sozinho em uma linha, substitua por comentário JSX
    if (/^\/[A-Za-z]+$/gm.test(match)) {
      return `{/* ${p1} */}`;
    }
    // Caso contrário, remove a barra
    return p1;
  });

  return fixedContent;
}

/**
 * Função para percorrer recursivamente um diretório e processar arquivos Markdown.
 * @param {string} dir - Diretório a ser percorrido.
 */
function processDirectory(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Erro ao ler o diretório ${dir}:`, err);
      return;
    }

    entries.forEach(entry => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        processDirectory(fullPath); // Chamada recursiva para subdiretórios
      } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.md') {
        processFile(fullPath);
      }
    });
  });
}

/**
 * Função para processar e corrigir um arquivo Markdown.
 * @param {string} filePath - Caminho completo do arquivo.
 */
function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo ${filePath}:`, err);
      return;
    }

    const fixedData = fixMdxContent(data);

    // Verificar se o conteúdo foi alterado
    if (fixedData !== data) {
      fs.writeFile(filePath, fixedData, 'utf8', err => {
        if (err) {
          console.error(`Erro ao escrever o arquivo ${filePath}:`, err);
          return;
        }
        console.log(`Arquivo corrigido: ${filePath}`);
      });
    }
  });
}

/**
 * Função principal que executa as operações de correção.
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Por favor, forneça o caminho do diretório a ser processado.');
    console.error('Uso: node fix_mdx_errors.js /caminho/para/diretorio');
    process.exit(1);
  }

  const targetDir = path.resolve(args[0]);

  // Verificar se o diretório existe
  if (!fs.existsSync(targetDir)) {
    console.error(`O diretório especificado não existe: ${targetDir}`);
    process.exit(1);
  }

  console.log(`Iniciando a correção de arquivos MDX no diretório: ${targetDir}`);

  processDirectory(targetDir);

  console.log('Correção de arquivos em andamento...');
}

// Executar a função principal
main();
