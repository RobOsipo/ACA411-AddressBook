import React from 'react'
import AllContacts from './AllContacts.js'
import SingleContact from './SingleContact.js'
import './App.css'



const App = () => {
    const [getJustOneContact, setGetJustOneContact] = React.useState(true)
const [getAllContacts, setGetAllContacts] = React.useState(false)
  
 const [addressBook, setAddressBook] = React.useState({
   first: '',
   last: '',
   thumbnail: ''
 })
 
 const [results, setResults] = React.useState([])
  
  
  React.useEffect(() => {
  fetch('https://randomuser.me/api?results=25')
  .then(response => response.json())
  .then(data => {
   
    setAddressBook({
      first: data.results[0].name.first,
      last: data.results[0].name.last,
      thumbnail: data.results[6].picture.thumbnail
    })
    
    setResults(data.results)
  })
  
}, [])
  
  
function getAll() {
  setGetJustOneContact(prevState => !prevState)
  setGetAllContacts(prevState => !prevState)
  
}

const buttonText = getJustOneContact ? 'All Contacts' : 'Just one Contact'
  
  return (
    <main className='app-container'>
      <h1>Address Book</h1>
      <button onClick={getAll}>Click for {buttonText}</button>
      {getJustOneContact && <SingleContact first={addressBook.first} last={addressBook.last} thumbnail={addressBook.thumbnail}  />}
      
      {getAllContacts && <AllContacts results={results} />}
      
    </main>
  )
}

export default App;