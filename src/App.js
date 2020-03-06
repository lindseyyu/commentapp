import React, {useState} from 'react'

import NewPost from './NewPost.js'
import PostIndex from './PostIndex.js'

const App = () => {
    const [posts, addPost] = useState([])

    const headingStyle = {
      fontFamily: "Century Gothic",
      textAlign: "center"
    }
    return (
        <div>
            <h1 style={headingStyle}>🔥🔥🔥✨🐻 Bears Discussion Board 🐼✨🔥🔥🔥</h1>
            <NewPost posts={posts} addPost={addPost}/>
            <PostIndex posts={posts} addPost={addPost}/>
        </div>
    )
  }

export default App
