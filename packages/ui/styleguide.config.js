// packages/ui/styleguide.config.js
const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.{ts,tsx}', // Path to your components
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/, // Process both .ts and .tsx files
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', // Compile modern JavaScript
                '@babel/preset-react', // Compile React JSX
                '@babel/preset-typescript', // Compile TypeScript
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Process CSS files
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolve these file types
    },
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  styleguideDir: 'styleguide',
};
