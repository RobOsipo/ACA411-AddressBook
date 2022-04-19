import React from 'react'
import classes from './App.module.css'


const AllContacts = ({ results, show, addressBook }) => {
    
const [showInfo, setShowInfo] = React.useState(false)
  
const handleShowInfo = () => {
  setShowInfo(prevState => !prevState)
}
    
    return (
        
        results.map((contact) => {
        return (
          <>
            {show && <h3 key={Math.floor(Math.random() * 10000)}>
            
                {contact.name.first} {contact.name.last}
            </h3>}
            
            {show && <img className={classes['mapped-images']} key={Math.floor(Math.random() * 10000)} src={contact.picture.thumbnail} />}
            
            <button onClick={handleShowInfo}>Show info</button>

            {showInfo && <h6 className={classes['address-info']}>City: {addressBook.city}</h6>}
            {showInfo && <h6 className={classes['address-info']}>State: {addressBook.state}</h6>}
            {showInfo && <h6 className={classes['address-info']}>Country: {addressBook.country}</h6>}
            
          

           

            
          </>
        )
      })
       
    )
}

export default AllContacts;