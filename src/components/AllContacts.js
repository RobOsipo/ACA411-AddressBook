import React from 'react'


const AllContacts = ({ results }) => {
    
const [show, setShow] = React.useState(true)

function handleShow() {
    setShow(prevState => !prevState)
}
    
    
    
    return (
        
        results.map((contact, index) => {
        return (
          <>
            {show && <h3 key={Math.floor(Math.random() * 10000)}>
            
                {contact.name.first} {contact.name.last}
            </h3>}
            
            {show && <img key={Math.floor(Math.random() * 10000)} src={contact.picture.thumbnail} />}
            
            <button onClick={handleShow}>{show ? 'Hide' : 'Show'} Contact</button>
          </>
        )
      })
       
    )
}

export default AllContacts;