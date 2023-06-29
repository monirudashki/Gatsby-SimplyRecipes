import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title, description }) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          author
          title
        }
      }
    }
   `)

    const { site } = data;
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            title={`${title} | ${site.siteMetadata.title}`}
            meta={[{
                name: `description`, content: metaDescription
            }]}
        >
        </Helmet>
    )
}

export default SEO
