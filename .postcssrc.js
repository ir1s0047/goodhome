module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue: (module) => (/vant/gi.test(module.file) ? 37.5 : 75),
      // propList: ['*']
      "rootValue": 37.5,
      "propList": ['*']
    }
  }
}
