# Next Level Week 2 - RocketSeat

Criação do projeto _Happy_ que permite o cadastro de orfanatos.

Evolução dos dias:

1. Desenvolvimento do front-end

## Dia 1: Front-end

Criar o projeto _Happy_, iniciando a versão web através da landing page e da página de mapa.

### Ambiente de desenvolvimento

- SO: Windows 10 + Ubuntu App
  - todos os comandos yarn e install devem ser feitos pelo Ubuntu
- IDE: Visual Studio Code
- layout: figma.com
  - arquivos [Happy_Mobile](Happy_Mobile.fig) e [Happy_Web](Happy_Web.fig)

### Criar o projeto react

    yarn create react-app web --template typescript

inicia a criação do projeto, gerando o log no terminal:

```
Creating a new React app in /mnt/c/git/next-level-week3/web.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...
...
Created git commit.

Success! Created web at /mnt/c/git/next-level-week3/web
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd web
  yarn start

Happy hacking!
```

### Adicionar fontes do Google

Adicionar a partir de fonts.google.com:

- Nunito 600, 700 e 800

Passos:

1. Abrir fonts.google.com
1. Buscar pela fonte, e selecionar os estilos selecionados
1. Visualizar as famílias de fonte selecionadas
1. _Embed_
1. Copiar a tag _link_
1. Usar no CSS

### Criar páginas

- página inicial: landing page
- mapa de orfanatos

### Mapas

- https://leafletjs.com : biblioteca javascript open-source para mapas interativos amigáveis a celulares
- https://react-leaflet.js.org/ : componentes React para mapas Leaflet
- https://www.openstreetmap.org/ : provedor de mapa que pode ser usado no Leaflet
- https://www.mapbox.com/ : alternativa ao openstreetmap, é necessário ter conta
- maps.google.com : alternativa ao openstreetmap, é necessário ter conta com cartão de crédito associado

### Outros comandos

Adicionar pacote para navegar entre as páginas baseado na URL, e também uma dependência somente para desenvolvimento.

    yarn add react-router-dom
    yarn add @types/react-router-dom -D

Adicionar pacote de ícones

    yarn add react-icons

Adicionar biblioteca de mapas, e também uma dependência somente para desenvolvimento.

    yarn add leaflet react-leaflet
    yarn add @types/react-leaflet -D

### Provedor de mapa

Openstreetmap:

```jsx
<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
```

Mapbox:

- crie um arquivo de configurações de ambiente (.env), que não deve ir pro github, crie uma chave _REACT_APP_MAPBOX_TOKEN_
- escolha um estilo de visualização, por exemplo: light-v10, satellite-v9

```jsx
<TileLayer url="`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`" />
```
