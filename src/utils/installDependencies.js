const { exec } = require('child_process');

module.exports = async (dir) => {
  const runChild = async () => {
    return new Promise((resolve, reject) => {
      const child = exec(`cd ./${dir} && npm install`, (error, stdout, stderr) => {
        if(error) {
          return reject(error);
        }

        return resolve({stdout, stderr});
      });

      child.stdout.on('data', function(data) {
        console.log(data);
      });

      child.stderr.on('data', function(data) {
        console.log(data);
      });

      child.on('error', function(err) {
        console.log(err);
      });

      child.stderr.on('error', function (err) {
         process.stderr.emit('error', err);
      });
    });
  };

  try {
    await runChild();
    console.log('All dependencies successfuly installed.');
  } catch (err) {
    console.log('An error occured while installing dependencies.');
    console.error(err);
  }



};
