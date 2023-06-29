const path = require('path');
const { default: slugify } = require('slugify');
const slug = require('slugify');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    query GetRecipes {
        allContentfulRecipe {
          nodes {
            content {
              tags
            }
          }
        }
      }
    `);

    result.data.allContentfulRecipe.nodes.forEach((recipe) => {
        recipe.content.tags.forEach((tag) => {

            const slugTag = slugify(tag, { lower: true });

            createPage({
                path: `/tags/${slugTag}`,
                component: path.resolve('src/templates/TagTemplate.js'),
                context: {
                    tag: tag
                }
            })
        })
    })
}