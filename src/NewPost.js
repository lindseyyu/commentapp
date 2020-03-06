import React, {useState} from 'react'
import Bear from './bear.jpg'
const NewPost = props => {
    const [nameInput, setnameInput] = useState('')
    const [bodyInput, setbodyInput] = useState('')

    const {posts, addPost} = props
    const divStyle = {
        backgroundImage: "url(" + Bear + ")",
        fontFamily: "Century Gothic",
        margin: '0px',
        border: '10px solid pink',
        textAlign: 'center'
    }
    const buttonStyle = {
      fontSize: "20px",
      fontFamily: "Century Gothic",

    }
    
    const onSubmit = () => {
        const postForm = posts.slice()
        postForm.push([nameInput, ": ", bodyInput])
        addPost(postForm)
    }


    return (
        <div style={divStyle}>
            <h2>Name:</h2>
            <input value={nameInput}
            onChange={e => setnameInput(e.target.value)} type="text"/>
            <h2>Write a new post about bears...</h2>
            <input value={bodyInput}
            onChange={e => setbodyInput(e.target.value)} type="text" style={{width: "370px"}}/>
            <h2></h2>
            {
                (nameInput && bodyInput) &&
                <button style={buttonStyle} onClick={onSubmit}>🐾</button>
            }
        </div>
    )
}

export default NewPost
