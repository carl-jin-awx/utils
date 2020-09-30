const semanticRelease = require('semantic-release');

const run = async () => {
  const result = await semanticRelease({
    branches: ['master'],
    repositoryUrl: 'git@github.com:carl-jin-awx/utils.git',
    dryRun: false,
    ci: false,
  }, {
    env: {...process.env, GH_TOKEN: '3a1fbdaa2313f77a43760f7f46e53b7f363ae9aa'}
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
