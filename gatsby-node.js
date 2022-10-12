const path = require("path");

// we use an async function because we are fetching the html data to inject into our template
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: "/projects/" + node.frontmatter.slug,
  //     component: path.resolve("./src/templates/project-details.js"),
  //     context: { slug: node.frontmatter.slug },
  //   })
  // })
};

//   path: `/projects/${node.frontmatter.slug}`,
