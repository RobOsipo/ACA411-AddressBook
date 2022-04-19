import React from 'react'
import AllContacts from './AllContacts.js'
import SingleContact from './SingleContact.js'
import classes from './App.module.css'



const App = () => {
    const [getJustOneContact, setGetJustOneContact] = React.useState(true)
    const [getAllContacts, setGetAllContacts] = React.useState(false)
      
    const [addressBook, setAddressBook] = React.useState({
      first: '',
      last: '',
      thumbnail: '',
      city: '',
      state: '',
      country: ''
    })
    
    const [results, setResults] = React.useState([])
    const [show, setShow] = React.useState(true)
 

 function handleShow() {
     setShow(prevState => !prevState)
 }
  
  
  React.useEffect(() => {
  fetch('https://randomuser.me/api?results=25')
  .then(response => response.json())
  .then(data => {
   
    setAddressBook({
      first: data.results[0].name.first,
      last: data.results[0].name.last,
      thumbnail: data.results[6].picture.thumbnail,
      city: data.results[0].location.city,
      state: data.results[0].location.state,
      country: data.results[0].location.country
    })
    
    setResults(data.results)
  })
  
}, [show])

  
  
function getAll() {
  setGetJustOneContact(prevState => !prevState)
  setGetAllContacts(prevState => !prevState)
  
}

const buttonText = getJustOneContact ? 'All Contacts' : 'Just one Contact'
const hideText = show ? 'Hide' : 'Show'
  
  return (
    <main className={classes['app-container']}>
      <h1>Address Book</h1>
      <button onClick={getAll}>Click for {buttonText}</button>
      {getAllContacts && <button onClick={handleShow}>{hideText} contacts</button>}
      {getJustOneContact && <SingleContact addressBook={addressBook}  />}
      
      {getAllContacts && <AllContacts show={show} handleShow={handleShow} results={results} addressBook={addressBook} />}
      
    </main>
  )
}

export default App;