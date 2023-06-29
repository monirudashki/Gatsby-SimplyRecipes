import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby';
import { setupTags } from '../utils/setupTags';
import slugify from 'slugify';
import SEO from '../components/SEO';

function Tags({ data }) {

  const { allContentfulRecipe: { nodes: recipes } } = data;

  const allTags = setupTags(recipes);

  return (
    <Layout>
      <SEO title={'Tags'} />
      <main className="page">
        <section className="tags-page">
          {allTags.map((tag, index) => {
            const [text, value] = tag;
            const slugTag = slugify(text, { lower: true });

            return <Link to={`/tags/${slugTag}`} key={index} className='tag'>
              <h5>{text}</h5>
              <p>{value} recipe</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags 