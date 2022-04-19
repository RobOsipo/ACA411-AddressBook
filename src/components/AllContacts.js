import React from 'react'
import classes from './App.module.css'


const AllContacts = ({ results, show, handleShow }) => {
    

    
    
    return (
        
        results.map((contact) => {
        return (
          <>
            {show && <h3 key={Math.floor(Math.random() * 10000)}>
            
                {contact.name.first} {contact.name.last}
            </h3>}
            
            {show && <img className={classes['mapped-images']} key={Math.floor(Math.random() * 10000)} src={contact.picture.thumbnail} />}
            
            {/* <button onClick={handleShow}>{show ? 'Hide' : 'Show'} Contact</button> */}
          </>
        )
      })
       
    )
}

export default AllContacts;