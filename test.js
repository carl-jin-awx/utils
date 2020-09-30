const semanticRelease = require('semantic-release');

const run = async () => {
  const result = await semanticRelease({
    branches: ['master'],
    repositoryUrl: 'https://github.com/carl-jin-awx/utils.git',
    dryRun: false,
    ci: false,
  }, {
    env: {...process.env, GH_TOKEN: 'c307a1c799d6b8c78f5c0b80c76eca10d0e89d1e'}
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
