const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configura o leitor de input do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Arte ASCII em vermelho
const asciiArt = `
\x1b[31m
  
    ____                      ___    __               
   /  _/  ____ _____ ___     /   |  / /___  ____  ___ 
   / /   / __ \`/ __ \`__ \\   / /| | / / __ \\/ __ \\/ _ \\
 _/ /   / /_/ / / / / / /  / ___ |/ / /_/ / / / /  __/
/___/   \\__,_/_/ /_/ /_/  /_/  |_/_/\\____/_/ /_/\\___/ 
   by 1nstagram                                                   
\x1b[0m
`;

console.log(asciiArt);

// Função para clonar o site
function cloneSite(url) {
  // Caminho da pasta "Sites"
  const sitesDir = path.join(__dirname, 'Sites');

  // Verifica se a pasta "Sites" existe, se não, cria
  if (!fs.existsSync(sitesDir)) {
    fs.mkdirSync(sitesDir);
  }

  // Comando wget para clonar o site
  const comandoWget = `wget -r -np -k -p ${url}`;

  console.log(`\x1b[31mClonando o site: ${url}...\x1b[0m`);

  // Executa o comando wget
  exec(comandoWget, (error, stdout, stderr) => {
    if (error) {
      console.error(`\x1b[31mErro ao clonar o site: ${error.message}\x1b[0m`);
      return;
    }

    // Move os arquivos clonados para a pasta "Sites"
    const host = new URL(url).hostname;
    fs.readdir(__dirname, (err, files) => {
      if (err) {
        console.error(`\x1b[31mErro ao ler o diretório: ${err.message}\x1b[0m`);
        return;
      }

      files.forEach((file) => {
        if (file.includes(host)) {
          const oldPath = path.join(__dirname, file);
          const newPath = path.join(sitesDir, file);

          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              console.error(`\x1b[31mErro ao mover o arquivo: ${err.message}\x1b[0m`);
            }
          });
        }
      });

      console.log(`\x1b[32mSite clonado com sucesso! Arquivos salvos em: ${sitesDir}\x1b[0m`);
    });
  });
}

// Solicita a URL do site
rl.question('\x1b[33mDigite a URL do site que deseja clonar:\x1b[0m ', (url) => {
  // Verifica se a URL foi fornecida
  if (!url) {
    console.log('\x1b[31mURL inválida. Por favor, insira uma URL válida.\x1b[0m');
  } else {
    try {
      // Tenta criar um objeto URL para validar a URL
      new URL(url);
      cloneSite(url);
    } catch (err) {
      console.log('\x1b[31mURL inválida. Por favor, insira uma URL válida.\x1b[0m');
    }
  }
  rl.close();
});
