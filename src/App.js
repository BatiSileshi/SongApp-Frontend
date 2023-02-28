
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SongList from './components/SongList';
import SongData from './data/SongData';



function App() { 
  const [song, setSong] = useState(SongData)




  return (
     <>
    <Header />  
      <div className="song">
       {/* passing song props to SongList  - goto SongList*/}
      <SongList song={song}/>
        
      </div>

      </>
  );
}

export default App;
