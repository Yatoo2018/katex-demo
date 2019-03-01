module.exports = {
  transpileDependencies: [
    // can be string or regex
    'xes-katex',
    'vue',
    'katex'
  ],
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      console.log(111)
      config.optimization.minimizer[0].options.sourceMap = false
      config.optimization.minimizer[0].options.terserOptions.output.comments = false
    }
  }
}