const activeConfig = 'dev'

const config = {
  dev: {
    appName: 'atomic-boilerplate-reactJS',
    url: {
      api: '',
      assets: '',
      origin: ''
    },
    firebase: {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    },
  },
  prod: {
    appName: 'atomic-boilerplate-reactJS',
    url: {
      api: '',
      assets: '',
      origin: ''
    },
    firebase: {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    }
  }
};

const appConfig = config[activeConfig];

export default appConfig;
