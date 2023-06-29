import React from 'react'
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Recipes from '../components/Recipes';
import SEO from '../components/SEO';

function about({ data }) {

  const { allContentfulRecipe: { nodes: recipes } } = data;

  return (
    <Layout>
      <SEO title={'About'}></SEO>
      <main className='page'>
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Taxidermy forage glossier letterpress
              heirloom before they sold out you probably
              haven't heard of them banh mi biodiesel chia.</p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
            <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person salt'
            className='about-img'
            placeholder='dominantColor'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look at this awasomesauce!</h5>
          <Recipes recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        cookTime
        id
        title
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

export default about
