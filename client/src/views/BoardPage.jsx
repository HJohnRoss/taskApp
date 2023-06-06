import React from 'react'
import { useParams } from 'react-router-dom'

function BoardPage() {

    const { id } = useParams();


    return (
        <div>BoardPage</div>
    )
}

export default BoardPage