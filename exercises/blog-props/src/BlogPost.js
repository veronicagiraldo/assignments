import React from 'react';

const BlogPost = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.author}</h3>
            <h3>{props.date}</h3>

        </div>
    )
}
export default BlogPost;