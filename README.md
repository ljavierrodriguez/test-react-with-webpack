### Pasos para configurar
### Configurar package.json
    $ npm init -y

### Instalar webpack and webpack-cli
    $ npm i webpack webpack-cli --save-dev

### Añadir al package.json

    "scripts": {
        ...
        "build": "webpack --mode production"
        ...
    },

### Instalar babel, react and config webpack
    $ npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

### Creamos las carpetas y archivos siguientes:

    src/index.js
    public/index.html
    .babelrc
    .gitignore
    webpack.config.js

### Instalar librerias para css, images o fuentes

    $ npm i @babel/plugin-proposal-class-properties style-loader css-loader file-loader --save

### Añadir al archivo .babelrc

    {
        ...,
        "plugins": [
            "@babel/plugin-proposal-class-properties"
        ]
    }


### Instalar html-webpack-plugin y webpack-dev-server

    $ npm i webpack-dev-server html-webpack-plugin --save-dev


### optional jquery, popper.js

    $ npm i jquery popper.js


### Añadir en webpack.config.js

    plugins: [
       ...,
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': "jquery",
            'Popper': 'popper.js'
        })
    ]

### Instalar bootstrap y fontawesome

    $ npm i bootstrap @fortawesome/fontawesome-free --save