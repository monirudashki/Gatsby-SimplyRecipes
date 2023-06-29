import React from 'react'
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <Layout>
            <SEO title={"ERROR"}></SEO>
            <main className='error-page'>
                <section>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                    <Link to='/' className='btn'>Go back home</Link>
                </section>
            </main>
        </Layout>
    )
}

export default NotFound
