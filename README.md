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

![Exemplo](https://drive.google.com/file/d/1VMjlv2Jk3PnyqCNdLe5zo4pIpyfLfuaK/view?usp=sharing)



## Decisões/Detalhes de implementação

* Por motivos de maior facilidade de implementação, quando os números são recebidos eles sao quebrados de 3 em 3 para a classificação por unidade, dezena e centenas; após essa classificação ele passa pela classificação de unidades de milhar, milhões e etc.

* Por escolha minha o maior número possível foi de 999 nonilhões, pois considerei que abrangeria a maioria dos casos em que os usuários poderiam ter interesse.

## Construido com

* [ReactJS](https://reactjs.org/docs/getting-started.html) - framework utilizado
* [Typescript](https://www.typescriptlang.org/docs/home.html) - "Linguagem"

## Authors

* **Fernando Taranto** - *Initial work* - [taranto](https://github.com/taranto)
* **Gabriel de Souza** - [Gabriel3421](https://github.com/Gabriel3421)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
