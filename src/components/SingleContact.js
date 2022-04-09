import React from 'react'


const SingleContact = ({ first, last, thumbnail }) => {
    return (
        <>
            <h3>{`Contact: ${first} ${last}`}</h3>
            <img src={thumbnail} />
        </>
    )
    
}

export default SingleContact;