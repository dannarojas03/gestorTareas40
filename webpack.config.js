const path = require('path');

module.exports = {
   entry: './src/index.js', //Punto de entrada de tu aplicacion
   output: {
       filename: 'bundle.js', //Nombre del archivo de salida
       path: path.resolve(__dirname, 'dist'), //carpeta de salida 
   },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loader para procesar archivos CSS
            },
            {
                test: /\.js$/, //Regex para identificar archivos Js
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para convertir JS moderno al JS compatible a mas navegadores 
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Genera source maps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta del que correra el servidor 
        compress: true, //Habilitar compresion 
        port: 9000, //Puerto del servidor de desarrollo 
    },
};
