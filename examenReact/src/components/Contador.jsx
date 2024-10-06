import React from 'react'
import { useState } from 'react'

function Contador(){
    const [likes, setLikes] = useState(0)

    const aumentar = () => 
        setLikes(likes + 1)
    return (
        <>
        <button onClick={aumentar}>{likes}</button>
        </>
    )
}
export default Contador

