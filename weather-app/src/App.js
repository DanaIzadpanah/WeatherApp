import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
const api = {
  key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})



  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div>
            <div className='location-box'>
              <div className='location'>New York City, US</div>
              <div className='date'>{dateBuilder(new Date())}</div>

            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
