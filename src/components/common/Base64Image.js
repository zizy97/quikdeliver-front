import React from 'react'

function Base64Image({data}) {
    return (
        <img width='100%' height='100%' src={`data:image/jpeg;base64,${data}`} />
    )
}

export default Base64Image
