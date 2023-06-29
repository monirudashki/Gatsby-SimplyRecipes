import React from 'react';
import TagsList from './TagsList';
import Recipes from './Recipes';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        title
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        prepTime
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {

    const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query);

    return (
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <Recipes recipes={recipes} />
        </section>
    )
}

export default AllRecipes
