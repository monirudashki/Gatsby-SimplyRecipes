import React from 'react'
import { setupTags } from '../utils/setupTags'
import { Link } from 'gatsby';
import slugify from 'slugify';

const TagsList = ({ recipes }) => {

    const allTags = setupTags(recipes);

    return (
        <div className='tag-container'>
            <h4>Recipes</h4>
            <div className="tags-list">
                {allTags.map((tag, index) => {
                    const slugTag = slugify(tag[0], { lower: true });
                    return <Link key={index} to={`/tags/${slugTag}`}>{tag[0]}({tag[1]})</Link>
                })}
            </div>
        </div>
    )
}

export default TagsList
