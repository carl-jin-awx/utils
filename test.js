const semanticRelease = require('semantic-release');

const run = async () => {
  const result = await semanticRelease({
    branches: ['master'],
    repositoryUrl: 'git@github.com:carl-jin-awx/utils.git',
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
