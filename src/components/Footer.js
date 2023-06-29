import React from 'react'

const Footer = () => {
    return (
        <footer className='page-footer'>
            <p>
                &copy; {new Date().getFullYear()}
                SimplyRecipes
                <span>Project build by Gatsby</span>
            </p>
        </footer>
    )
}

export default Footer
