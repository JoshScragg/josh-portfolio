/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.pdf$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'pdf/'
                }
              }
            ]
          }
        ]
      }
    });
  };