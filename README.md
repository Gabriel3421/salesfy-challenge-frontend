# Este é o projeto de desafio Salesfy, etapa Frontend.

Projeto de interface para dado um numero, retornar o mesmo por extenso.

## Getting Started

### Pré-requisitos

Para usar vc precisará ter o node instalado na sua maquina, bem como o yarn, mas os comandos também podem ser executados usando o npm

### Instalação

Instalando dependências

```
yarn ou npm install
```

Executando o projeto

```
yarn start ou npm start
```
OBS:
Para o funcionamento correto rode primeiro o [back-end](https://github.com/Gabriel3421/SalesfyChallengeBackend) depois tente inserir os numero no campo de input.

## Exemplo de uso

  Após ter iniciado o servidor com o [back-end](https://github.com/Gabriel3421/SalesfyChallengeBackend) e iniciado este projeto, faça da seguinte forma :

![Exemplo](https://github.com/Gabriel3421/salesfy-challenge-frontend/blob/master/src/assets/exemplo.gif)

## Decisões/Detalhes de implementação

* Foi utilizado Redux, para guardar o state globalmente, como é uma programa "pequeno", salvei somente o historico de traduções, e as informações a partir dele, como a quantidade de elementos eu guardo no proprio state do componente, pois juguei que nao teria necessidade de armazenar no state global.

* Também foi adicionado a parte de Saga (Redux + Saga) para fazer requisições a api de tradução.

* Styled-components para a estilização mais precisa e facilitada dos componentes.

## Construido com

* [ReactJS](https://reactjs.org/docs/getting-started.html) - framework utilizado
* [Typescript](https://www.typescriptlang.org/docs/home.html) - "Linguagem"
* [Redux](https://redux.js.org/) - Biblioteca
* [Redux-Saga](https://redux-saga.js.org/) - Biblioteca
* [Styled-Components](https://styled-components.com/docs/api) - Biblioteca

## Authors

* **Fernando Taranto** - *Initial work* - [taranto](https://github.com/taranto)
* **Gabriel de Souza** - [Gabriel3421](https://github.com/Gabriel3421)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
