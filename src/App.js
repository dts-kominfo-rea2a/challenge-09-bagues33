import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact.js';
import Header from './components/Header.js';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="card">
        <Contact img={contacts[0].photo} alt={contacts[0].name} nama={contacts[0].name} nomor={contacts[0].phone} email={contacts[0].email}/>
        <Contact img={contacts[1].photo} alt={contacts[1].name} nama={contacts[1].name} nomor={contacts[1].phone} email={contacts[1].email}/>
        <Contact img={contacts[2].photo} alt={contacts[2].name} nama={contacts[2].name} nomor={contacts[2].phone} email={contacts[2].email}/>
        <Contact img={contacts[3].photo} alt={contacts[3].name} nama={contacts[3].name} nomor={contacts[3].phone} email={contacts[3].email}/>
        <Contact img={contacts[4].photo} alt={contacts[4].name} nama={contacts[4].name} nomor={contacts[4].phone} email={contacts[4].email}/>
        <Contact img={contacts[5].photo} alt={contacts[5].name} nama={contacts[5].name} nomor={contacts[5].phone} email={contacts[5].email}/>
      </div>
    </div>
  );
}

export default App;
