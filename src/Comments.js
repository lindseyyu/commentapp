import React, { useState } from 'react'

import PostIndex from './PostIndex.js'

  const Comments = props => {
    const {post} = props
    const [nameInput, setnameInput] = useState('')
    const [bodyInput, setbodyInput] = useState('')
    const [replyChain, setreplyChain] = useState([])
    const [isaReply, setisaReply] = useState(false)
    const [addNewReply, isNewReply] = useState(false)
    const [pressed, setReply] = useState(false) //when button is pressed to submit
    const [count, setCount] = useState(0)

    const buttonStyle = {
      fontSize: "20px",
      fontFamily: "Century Gothic",
      backgroundColor: "Transparent",
      fontWeight: "bold"
    }
    const countStyle = {
      fontSize: "20px",
      fontWeight: "bold"
    }
    const listStyle = {
      listStyleType: "none",
    }
    const onSubmit = () => { //for butt
        isNewReply(true)
        setReply(true)
    }

    const addReply = () => {
        setisaReply(true)
        isNewReply(false)
        const replyObj = replyChain.slice()
        replyObj.push([nameInput, ': ', bodyInput])
        setreplyChain(replyObj)
     }

    return (
        <li style={listStyle}>
            {post}
            <h1></h1>
            <button style={buttonStyle} onClick = {() => setCount(count + 1)}>△</button>
            <p style={countStyle}>{count}</p>
            <button style={buttonStyle} onClick = {() => setCount(count - 1)}>▽</button>
            <button style={buttonStyle} onClick={onSubmit}>Reply 🧸</button>
            {pressed &&
                <>
            {
            addNewReply &&
                <>
            <h3>Name...</h3>
            <input value={nameInput}
            onChange={e => setnameInput(e.target.value)} type="text"/>
            <h3>Reply...</h3>
            <input value={bodyInput}
            onChange={e => setbodyInput(e.target.value)} type="text" />
            {
            (nameInput && bodyInput) &&
            <button style={buttonStyle} onClick={addReply}>Reply 🧸</button>
            }
            </>
            }
            {
            isaReply &&
            <PostIndex posts={replyChain} addPost={setreplyChain}/>
            }
            </>
            }
        </li>
    )
}

export default Comments
