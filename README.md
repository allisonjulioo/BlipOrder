# Teste frontend Take
Esse teste foi escrito em react usando functions components, não foi usado classes
 

## Principais dependências de trerceiros

- Redux - 4.0.5
- Styled Components - 5.1.0
- Craco - 5.6.4 
- Json-server - 5.6.4 

## Para rodar o projeto siga os comandos

### Instalar dependências `yarn` ou `npm install`
### Iniciar projeto `yarn start` ou `npm start`
### Subir a mock API `json-server --watch bots.json -p 1010`
### Rodar testes `yarn test` ou `npm test`


## Arquitetura do projeto

src
  app
    pages
      components
    routes
  assets
  colors
  constants
  services
  styles
  store
    actions
    reducers
    state
  tests
    components
    services
    pages
    utils
  utils
 
 ## Informações do projeto

 Todo o estilo do projeto foi contruido em styles-components. </br>
 As chamadas são de uma api real que construi para esse projeto</br>
 Utilizei o craco para melhorar a importação de arquivos, era assim "../../../../path" agora é assim "@/path"
 em alguns components está da forma escrita acima, mas em outros está com o visual feio por causa do <b>jest</b> ele cismou de avacalhar a importação e não teve jeito, tive que modificar tudo onde ele passava, tanto queo os teste não cobrem os components.
  </br>
 as informações estão trafegando via Redux.

## Importante!!!

A aplicação esta sendo servida por um component chamado json-server, esse component tem a função de expor um aruivo json que é servido como api, temos todos os verbos http GET POST PUT PATCH DELETE, só tem uma rota nesse caso http://localhost:1010/bots. </br>

### Para rodar tudo de uma vez

`yarn && yarn start | json-server --watch bots.json -p 1010` </br>
ou</br>
`npm install && npm start | json-server --watch bots.json -p 1010` </br>