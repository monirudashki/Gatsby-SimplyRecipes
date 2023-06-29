import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import slugify from 'slugify';
import SEO from '../components/SEO';

const RecipeTemplate = ({ data }) => {

    const { cookTime, prepTime, servings, title, content, description: { description }, image } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const { ingredients, instructions, tags, tools } = content;

    return (
        <Layout>
            <SEO title={title} />
            <main className="page">
                <div className="recipe-page">
                    <section className="recipe-hero">
                        <GatsbyImage image={pathToImage} alt={title} className='about-img' />
                        <article className='recipe-info'>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="recipe-icons">
                                <article>
                                    <BsClock />
                                    <h5>Prep Time</h5>
                                    <p>{prepTime} min</p>
                                </article>
                                <article>
                                    <BsClockHistory />
                                    <h5>Cook Time</h5>
                                    <p>{cookTime} min</p>
                                </article>
                                <article>
                                    <BsPeople />
                                    <h5>Servings</h5>
                                    <p>{servings} times</p>
                                </article>
                            </div>

                            <p className="recipe-tags">
                                Tags: {tags.map((tag, index) => {
                                    const slugTag = slugify(tag, { lower: true });
                                    return <Link key={index} to={`/tags/${slugTag}`}>
                                        {tag}
                                    </Link>
                                })}
                            </p>
                        </article>
                    </section>
                    <section className="recipe-content">
                        <article>
                            <h4>instructions</h4>
                            {instructions.map((item, index) => {
                                return (
                                    <div key={index} className="single-instruction">
                                        <header>
                                            <p>step {index + 1}</p>
                                            <div></div>
                                        </header>
                                        <p>{item}</p>
                                    </div>
                                )
                            })}
                        </article>
                        <article className="second-column">
                            <div>
                                <h4>ingredients</h4>
                                {ingredients.map((item, index) => {
                                    return (
                                        <p key={index} className="single-ingredient">
                                            {item}
                                        </p>
                                    )
                                })}
                            </div>
                            <div>
                                <h4>tools</h4>
                                {tools.map((item, index) => {
                                    return (
                                        <p key={index} className="single-tool">
                                            {item}
                                        </p>
                                    )
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      cookTime
      id
      prepTime
      servings
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

export default RecipeTemplate
