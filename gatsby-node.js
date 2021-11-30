const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query PagesQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        direction
                        course
                    }
                }
            }
        }
    `)
    data.allMarkdownRemark.nodes.forEach((node) => {
        actions.createPage({
            path: `/tasks/${node.frontmatter.course}/${node.frontmatter.direction}`,
            component: path.resolve('./src/template/task-details.js'),
            context: {
                direction: node.frontmatter.direction
            }
        })
    })
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === 'build-html' || stage === 'develop-html') {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /react-p5/,
//                         use: 'null-loader'
//                     }
//                 ]
//             }
//         })
//     }
// }
