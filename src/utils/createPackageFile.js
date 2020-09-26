const fs = require('fs');

module.exports = async dir => {
  try {
    await fs.writeFile(`${process.cwd()}/${dir}/package.json`, `{
      "name": "${dir}",
      "version": "0.0.1",
      "description": "a Loppa based project",
      "main": "./src/index.js",
      "private": true,
      "scripts": {
        "build": "webpack",
        "dev-server": "webpack-dev-server",
        "test": "echo \\\"Error: no test specified\\\" && exit 1"
      },
      "keywords": [
        "node",
        "npm"
      ],
      "author": "",
      "license": "MIT",
      "dependencies": {
        "@koppa/core": "^1.0.1"
      },
      "devDependencies": {
        "@babel/core": "^7.11.6",
        "@babel/preset-env": "^7.11.5",
        "babel-core": "^6.26.3",
        "babel-loader": "^8.1.0",
        "babel-polyfill": "^6.26.0",
        "babel-preset-es2015": "^6.24.1",
        "css-loader": "^4.3.0",
        "file-loader": "^6.1.0",
        "style-loader": "^1.2.1",
        "webpack": "^4.44.2",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0"
      }
    }`, () => {});

    console.log('Successfuly created package.json.');
  } catch (err) {
    console.log('An error occured while creating package.json.');
    console.error(err);
  }
};
