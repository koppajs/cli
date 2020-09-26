const fs = require('fs-extra');

module.exports = async (dir, copyStack) => {
  for(let i of copyStack) {
    try {
      await fs.copy(`${__dirname}/../../dist/${i[0]}`, `${process.cwd()}/${dir}${i[1] ? '/' + i[1] : ''}`);
      console.log('Successfuly copied data.');
    } catch (err) {
      console.log('An error occured while copying the folder.');
      console.error(err);
    }
  }
};
