# ✂️ Hair Day - Agendamento de Barbearia



## 📄 Sobre o Projeto

**Hair Day** é uma aplicação web moderna e intuitiva para agendamento de horários em barbearias e salões de beleza. O projeto permite que o usuário selecione uma data, visualize os horários disponíveis e agende um atendimento informando o nome do cliente.

A aplicação foi desenvolvida com JavaScript puro (vanilla JS), utilizando ferramentas modernas do ecossistema front-end como **Webpack** para empacotamento de módulos e **Babel** para transpilação, garantindo compatibilidade e performance.

---

## ✨ Funcionalidades

- **📅 Agendamento de Horários**: Selecione uma data e um horário disponível no formulário.
- **📝 Cadastro de Cliente**: Informe o nome do cliente para associar ao agendamento.
- **👀 Visualização por Dia**: Veja todos os agendamentos do dia selecionado, organizados por período (Manhã, Tarde e Noite).
- **❌ Cancelamento de Agendamentos**: Remova facilmente um agendamento existente.
- **🕰️ Validação Inteligente**: Horários que já passaram são automaticamente desabilitados.
- **📱 Design Responsivo**: A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a celulares.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Ferramentas de Desenvolvimento**:
  - **[Webpack](https://webpack.js.org/)**: Empacotador de módulos para o build da aplicação.
  - **[Babel](https://babeljs.io/)**: Transpilador de JavaScript para garantir compatibilidade com navegadores mais antigos.
  - **[Day.js](https://day.js.org/)**: Biblioteca para manipulação e formatação de datas.
  - **[JSON Server](https://github.com/typicode/json-server)**: Utilizado para criar uma API REST mock para simular o backend durante o desenvolvimento.

---

## ⚙️ Como Executar o Projeto

Para rodar a aplicação localmente, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/en/) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/broninn/hairday.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd hairday
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor da API (json-server):**
    Abra um terminal e execute o comando abaixo. Ele ficará observando o arquivo `server.json`.
    ```bash
    npm run server
    ```
    > A API estará disponível em `http://localhost:3333`.

5.  **Inicie a aplicação:**
    Em **outro terminal**, execute o comando para iniciar o servidor de desenvolvimento do Webpack.
    ```bash
    npm run dev
    ```

6.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:3000`. A aplicação será carregada e já estará conectada à API local.

---

## 📜 Scripts Disponíveis

No `package.json`, você encontrará os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento com `webpack-dev-server`, incluindo live-reload.
- `npm run build`: Gera os arquivos de produção otimizados na pasta `/dist`.
- `npm run server`: Inicia o `json-server` para simular a API REST na porta 3333.

---

## 📁 Estrutura do Projeto

```
hairday/
├── dist/              # Arquivos de produção gerados pelo Webpack
├── src/               # Código-fonte da aplicação
│   ├── assets/        # Imagens e ícones
│   ├── modules/       # Módulos JS (lógica dos componentes)
│   ├── services/      # Comunicação com a API
│   ├── styles/        # Arquivos CSS
│   └── main.js        # Ponto de entrada da aplicação
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── index.html         # Estrutura HTML principal
├── package.json       # Dependências e scripts do projeto
├── server.json        # Banco de dados mock para o json-server
└── webpack.config.js  # Configurações do Webpack
```

---

## 👨‍💻 Autor

Desenvolvido por **Bruno Henrique da Silva Mosko**.

