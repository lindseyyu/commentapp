import React from 'react'

import Comments from './Comments.js'

const PostIndex = props => {
    const {posts, addPost} = props
    const indexStyle = {
        backgroundColor: "lightblue",
        fontFamily: "Century Gothic",
        margin: '0px',
        border: '10px solid pink'
    }

    return (
        <ul style={indexStyle}>
            {
                posts.map((post) => <Comments post={post} posts={posts} addPost={addPost}/>)
            }
        </ul>
    )
}

export default PostIndex
