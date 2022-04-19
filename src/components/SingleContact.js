import React from 'react'
import classes from './App.module.css'


const SingleContact = ({ addressBook }) => {
    return (
        <>
            <h3>{`Contact: ${addressBook.first} ${addressBook.last}`}</h3>
            <img className={classes['mapped-images']} src={addressBook.thumbnail} />
            <h6 className={classes['address-info']}>City: ${addressBook.city}</h6>
            <h6 className={classes['address-info']}>State: ${addressBook.state}</h6>
            <h6 className={classes['address-info']}>Country: ${addressBook.country}</h6>
        </>
    )
    
}

export default SingleContact;