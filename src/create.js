const readline = require("readline");
const createPackageFile = require('./utils/createPackageFile.js');
const copyFiles = require('./utils/copyFiles.js');
const installDependencies = require('./utils/installDependencies.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const createProcess = async (name, type) => {
  console.log(`Copy ${type} project data...`);
  await copyFiles(name, [[type, '']]);
  console.log('Create package.json file...');
  await createPackageFile(name);
  console.log('Installing dependencies...\n');
  await installDependencies(name);
}

const question = `How do you want to start your Koppa.js based app?\n\n 1: with sample data\n 2: without sample data\n\nEnter a number: `;

module.exports = name => {
  rl.question(question, async choice => {
      if(choice == '1') {
        choice = 'sample';
      } else if(choice == '2') {
        choice = 'clear';
      }

      await createProcess(name, choice);

      rl.close();
  });

  rl.on("close", () => {
    console.log('\nJob done, have fun!');
  });
};
