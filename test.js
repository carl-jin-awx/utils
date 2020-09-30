const semanticRelease = require('semantic-release');
const dotenv = require('dotenv')

const run = async () => {
  dotenv.config()
  const result = await semanticRelease({
    branches: ['master'],
    repositoryUrl: 'https://github.com/carl-jin-awx/utils.git',
    dryRun: false,
    ci: false,
  }, {
    env: process.env
  });
  if (result) {
    console.log(result.lastRelease);
    console.log(result.nextRelease);
    console.log(result.commits);
  } else {
    console.log('failed');
  }
};

run();
