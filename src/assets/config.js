// const configData = process.env;

const config = {};

try {
  config.apiURL =
    'https://content.newtonschool.co/v1/pr';
} catch {
  config.apiURL = 'https://content.newtonschool.co/v1/pr';
}

export default config;
