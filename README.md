<h1 align="center">
    <img alt="proffy" title="proffy" src="https://i.imgur.com/aqEMqO3.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedroksty/proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedroksty/proffy">

  <a href="https://www.twitter.com/pedroksty/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fpedroksty%2Fnlw1">
  </a>
	
  
  <a href="https://github.com/pedroksty/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pedroksty/proffy">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/pedroksty/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pedroksty/proffy?style=social">
  </a>
</p>

## 💻 Sobre o projeto

Proffy - é uma plataforma de conectar alunos e professores de maneira fácil.

## 🎨 Layout

### 📱 Mobile

<p align="center">
  <img alt="proffy" title="proffy" src="https://i.imgur.com/HG4eM7P.png" >
  <img alt="proffy" title="proffy" src="https://i.imgur.com/9vKJMLG.png" >
  <img alt="proffy" title="proffy" src=https://i.imgur.com/8LjFfnu.png" >
</p>

### 🧭 Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="proffy" title="proffy" src="https://i.imgur.com/3YnJHbT.png" >

  <img alt="proffy" title="proffy" src="https://i.imgur.com/CSspUHK.png" >
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]
- [Yarn Workspaces][yarn-workspaces]

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:

1. Back End (pasta packages/server)
2. Front End (pasta packages/web)
3. Mobile (pasta packages/mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Yarn][yarn].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy

# Vá para a pasta server
$ cd packages/server

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:4444 - acesse http://localhost:4444
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/proffy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy

# Vá para a pasta da aplicação Front End
$ cd packages/web

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱Rodando a aplicação mobile

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/proffy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy

# Vá para a pasta da aplicação Front End
$ cd packages/mobile

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# Escanei o QR CODE com o aplicativo Expo instalado no seu Smarthphone
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Pedro henrique 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pedro-henrique-b9541a199/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[yarn]: https://yarnpkg.com/getting-started/install
[yarn-workspaces]: https://classic.yarnpkg.com/en/docs/workspaces/
