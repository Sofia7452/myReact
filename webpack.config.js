module.exports = {
  entry: {
    main: './main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx',{pragma:'createElement'}]]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false
  }
}

//yarn add -D webpack webpack-cli--->npx webpack

//yarn add -D babel-loader @babel/core @babel/preset-env
// @babel/preset-env包含了常用babel配置

// yarn add -D @babel/plugin-transform-react-jsx 
//这是为了让非react的普通js文件可以写jsx