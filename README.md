
# I am Alone is a Site Cloner tools 

![Site Cloner Banner](master/ft/Screenshot_2025-03-05-02-22-36-156_com.termux.png) <!-- Adicione uma imagem ou banner se desejar -->

Este é um script em **Node.js** que permite clonar sites usando o comando `wget`. Ele cria uma pasta chamada **"Sites"** e move todos os arquivos clonados para lá. O script também inclui uma arte ASCII estilizada e mensagens coloridas no terminal para melhorar a experiência do usuário.

---

## Funcionalidades

- **Clonagem de Sites**: Usa o comando `wget` para baixar sites recursivamente.
- **Gerenciamento de Pastas**: Cria automaticamente uma pasta chamada **"Sites"** e move os arquivos clonados para lá.
- **Validação de URL**: Verifica se a URL fornecida é válida antes de iniciar o processo.
- **Mensagens Coloridas**: Usa cores no terminal para destacar mensagens de sucesso, erros e prompts.
- **Arte ASCII**: Exibe uma arte ASCII estilizada no início do script.

---

## Como Usar

### Pré-requisitos

1. **Node.js**: Instalado no seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. **wget**: Instalado e configurado no seu sistema. Para instalar:
   - No Ubuntu/Debian: `sudo apt install wget`
   - No macOS: `brew install wget`
   - No Windows: Use o Git Bash ou instale o `wget` manualmente.

### Passos para Execução

1. Clone este repositório ou baixe o arquivo `cloner.js`.
2. Abra o terminal e navegue até o diretório onde o arquivo está localizado.
3. Execute o script com o seguinte comando:
   ```bash
   node cloner.js
   ```
4. Insira a URL do site que deseja clonar quando solicitado.
5. Aguarde o processo de clonagem. Os arquivos serão salvos na pasta **"Sites"**.

---

## Exemplo de Uso

```bash
$ node cloner.js

    ____                      ___    __               
   /  _/  ____ _____ ___     /   |  / /___  ____  ___ 
   / /   / __ \`/ __ \`__ \\   / /| | / / __ \\/ __ \\/ _ \\
 _/ /   / /_/ / / / / / /  / ___ |/ / /_/ / / / /  __/
/___/   \\__,_/_/ /_/ /_/  /_/  |_/_/\\____/_/ /_/\\___/ 
                                                      
Digite a URL do site que deseja clonar: https://example.com
Clonando o site: https://example.com...
Site clonado com sucesso! Arquivos salvos em: /caminho/do/script/Sites
```

---


## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

- **Nome**: [1nstagram]
- **GitHub**: [01nstagram]
