const path = require('path');

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const template = path.resolve('src/blog/post-template.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const slug = node.frontmatter.path;
          if (slug) {
            createPage({
              path: slug,
              component: template,
              context: {
                slug,
              },
            })
          }
        })
      })
    )
  })
}
