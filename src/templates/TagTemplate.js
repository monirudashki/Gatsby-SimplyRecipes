import React from 'react';
import { graphql } from 'gatsby';
import Recipes from '../components/Recipes';
import Layout from '../components/Layout';

const TagTemplate = ({ data, pageContext }) => {

    const { allContentfulRecipe: { nodes: recipes } } = data;

    return (
        <Layout>
            <main className="page">
                <h2>{pageContext.tag}</h2>

                <div className="tag-recipes">
                    <Recipes recipes={recipes} />
                </div>

            </main>
        </Layout>
    )
}

export const query = graphql`
query GetRecipesByTag($tag: String) {
    allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }	
    }
  }
`

export default TagTemplate
