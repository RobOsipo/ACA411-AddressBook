import React from 'react'
import classes from './App.module.css'


const SingleContact = ({ first, last, thumbnail }) => {
    return (
        <>
            <h3>{`Contact: ${first} ${last}`}</h3>
            <img className={classes['mapped-images']} src={thumbnail} />
        </>
    )
    
}

export default SingleContact;